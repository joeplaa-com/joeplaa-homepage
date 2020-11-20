# Readme

* Based on: <https://github.com/adnanrahic/lambda-mailer>
* Tutorial: <https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0>
* Using the serverless framework

## Development

### Install dependencies

* `yarn global add serverless`

### Configure serverless

* Add your personal AWS credentials:

    ```console
    serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx
    ```

    Or add them manually (better if you want multiple profiles):

    ```console
    nano ~/.aws/credentials
    ```

    Or use the VScode AWS plugin:

    `View` => `Command Palette...` => `AWS: Create Credentials Profile`

    *Example file:*

    ```yaml
    [jodibooks]
    aws_access_key_id=AKIA****************
    aws_secret_access_key=****************************************
    region=eu-central-1
    output=json

    [joeplaa.com]
    aws_access_key_id=AKIA****************
    aws_secret_access_key=****************************************
    region=eu-central-1
    output=json
    ```

### Add secrets files

This is not a secrets file. It's the config file. Weird choice of words.

* Create `secrets-dev.json`:

    ```json
    {
        "NODE_ENV":"dev",
        "EMAIL":"info@joeplaa.com",
        "DOMAIN":"*"
    }
    ```

* Create `secrets-prod.json`:

    ```json
    {
        "NODE_ENV":"prod",
        "EMAIL":"info@joeplaa.com",
        "DOMAIN":"joeplaa.com"
    }
    ```

### AWS SES

* Verify your domain with SES: <https://eu-central-1.console.aws.amazon.com/ses/home?region=eu-central-1#verified-senders-domain:>. Double check that you are in the correct region (this link goes to Frankfurt).
* Verify your email address: <https://eu-central-1.console.aws.amazon.com/ses/home?region=eu-central-1#verified-senders-email:>. Double check again that you are in the correct region (this link goes to Frankfurt).

## Deploy

* Open `serverless.yml` and change the secrets to the applicable environment (`dev` or `prod`)

    ```yaml
    custom:
      secrets: ${file(secrets-dev.json)}
    ```

* Region must be set to the region where the receiver (email address) is verified by SES.

    ```yaml
    provider:
      name: aws
      runtime: nodejs12.x
      stage: ${self:custom.secrets.NODE_ENV}
      region: eu-central-1
    ```

* Run:

    ```console
    serverless deploy --aws-profile joeplaa.com
    ```

* Configure and deploy the Gateway:
  * Only allow your IP for dev access: <https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-resource-policy-access/>
  * Deploy the API to DEV (or PROD) environment (Actions -> Deploy API)
  * Copy the link to the API

* Create a more friendly address:

  > <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html>

  * Open a new tab to the [AWS Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1#/privatewizard/)
    * Create an SSL certificate for `mail-api.joeplaa.com` in region `us-east-1`
    * Choose DNS validation, add tag `website` - `joeplaa.com` and add the record(s) to the Route 53 hosted zone
  * Go back to the [API Gateway](https://eu-central-1.console.aws.amazon.com/apigateway/main/apis?region=eu-central-1) tab
    * Click the API and go to "Custom Domain Names"
    * Create a Custom domain name in API gateway for `mail-api.joeplaa.com`, add tag `website` - `joeplaa.com` and choose "Edge-optimized" as Endpoint configuration
    * Add the recently created SSL certificate
    * Add API mappings:

    |API                    |Stage|Path|
    |-----------------------|-----|----|
    |dev-contact-form-api   |dev  |dev |
    |prod-contact-form-api  |prod |prod|

  * Add an A-type alias for `mail-api.joeplaa.com` to the "API Gateway domain name" in the Route 53 hosted zone. The API Gateway domain name can be found in the Configurations tab of the Custom domain names section of the API Gateway.
