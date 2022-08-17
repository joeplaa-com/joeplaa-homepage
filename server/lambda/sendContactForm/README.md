# README

Connect a HTML contact form with AWS Lambda to send emails through AWS SES.

## Configure AWS

Switch to the AWS account you want to create this functionality in.

### SES

1. Check if the email domain is verified in the region you want to deploy this Lambda function in: <https://eu-central-1.console.aws.amazon.com/ses/home?region=eu-central-1#/verified-identities>. The SES region has to be the same as the Lambda region.
2. The domain is probably already verified, but if not add it.

### Protonmail

1. Go to Protonmail.
2. Check if the email address you want to use is added as an alias.

### IAM

1. Go to the IAM console --> policies <https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/policies>.
2. Create a policy `AmazonSESSendingAccess`. If it is already there, great, saves you some trouble!

    1. Click the JSON tab and add code below:

        ```json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Sid": "VisualEditor0",
                    "Effect": "Allow",
                    "Action": [
                        "ses:SendEmail",
                        "ses:SendRawEmail"
                    ],
                    "Resource": "*"
                }
            ]
        }
        ```

    2. Click "Next: ..." twice
    3. Enter the name `AmazonSESSendingAccess` and description `Send email through SES`
    4. Create policy.

3. Create another policy with name `AWSLambdaBasicExecutionRole-sendContactForm`, description `Allow Lambda function to create logs in CloudWatch` and the JSON below (change the resource for production):

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "logs:CreateLogGroup",
                "Resource": "arn:aws:logs:eu-central-1:926909088353:*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": [
                    "arn:aws:logs:eu-central-1:926909088353:log-group:/aws/lambda/sendContactForm:*"
                ]
            }
        ]
    }
    ```

4. Go to Roles and create a new one.
    1. Select `AWS service` and then select Use case `Lambda`. Click Next.
    2. Add the policies created above. Click Next.
    3. Give it a name: `LambdaSendContactFormRole` and description: `Allows Lambda functions to call AWS services on your behalf.` Click Create role.

### Lambda

1. Go to the Lambda console and create a new function: <https://eu-central-1.console.aws.amazon.com/lambda/home?region=eu-central-1#/create/function>.
2. Enter the Function name: `sendContactForm`, select Runtime: `Node.js 14.x` and under "Change default execution role select `Use an existing role`. Select the role created above.
3. Go to tab Configuration and click Environment variables.
    1. Add `RECEIVEMAIL`: `info@joeplaa.com`
    2. Add `REPLYEMAIL`: `info@joeplaa.com`
    3. Add `REGION`: `eu-central-1`
4. Go the code tab and clear the code in `index.js` and paste the code from this repository.
5. Create files `confirmEmail.js` and `receiveEmail.js`.
6. Click Deploy.

### API Gateway

1. Go to the API Gateway console and create a new API <https://eu-central-1.console.aws.amazon.com/apigateway/main/precreate?region=eu-central-1>.
2. Click on the Build button for `REST API`.
    1. The protocol should be `REST` and under Create new API `New API` should be selected.
    2. Enter the API name `sendContactForm` and description `API to connect our homepage contact form with the sendContactForm Lambda function.`.
    3. Choose `Edge optimized` as Endpoint Type.
3. Under Resources click `Actions` --> `Create Resource`.
    1. Resource Name: `form`, Resource Path: `form`.
    2. Click the created OPTIONS method.
    3. Go to intergration request en select `Lambda Function` as Integration type and check Use Lambda Proxy integration
4. Select this path and under `Actions` --> click `Create Method`.
    1. Add `POST`
    2. Integration type: `Lambda Function`, check Use Lambda Proxy integration, Lambda Region: `eu-central-1`, Lambda Function: `sendContactForm`.
    3. Save --> OK
5. Now the most important step: Deploy the API. This needs to be done after **every** change.
    1. Under Resources click `Actions` --> `Deploy API`.
    2. Select the Deployment stage: `dev`/`prod`
6. Cycle through steps 6 and 7 to deploy DEV/PROD versions of the API.
7. Click Custom domain names in the menu on the left
    1. Create a new one with Domain name `contact.joeplaa.com`. Select `Edge-optimized` as Endpoint type and select the `*.joeplaa.com` certificate.
8. Select this domain name go to tab API mappings. Click Configure API mappings
    1. Create a mapping for Stage `dev` with path `dev`.
    2. For PROD we only create one mapping: Stage `prod` with an empty path.
    3. Save
9. Now from the Configurations tab copy the API Gateway domain name; something like `dgbxe6dxzhv5n.cloudfront.net`.

### Route 53

1. Go to Route 53 and then to the Hosted zone which the contact form is for.
2. Add an entry:
    1. Record name: `contactform`
    2. Record type: `A`
    3. Select Alias
    4. Route traffic to CloudFront distribution
    5. Paste the value from the Gateway API
    6. Click save.

## Checks

* Send an `OPTIONS` request to `https://contact.joeplaa.com/dev/contact` with body:

    ```json
    {
        "email":"name@joeplaa.com",
        "name":"Name",
        "message":"Dit is een test bericht verstuurd vanuit Postman."
    }
    ```

    and header `origin: http://dev.joeplaa.com`.

    This should return 200 OK with an empty response body.

* Send a `POST` request to `https://contact.joeplaa.com/dev/contact` with body:

    ```json
    {
        "email":"name@joeplaa.com",
        "name":"Name",
        "message":"Dit is een test bericht verstuurd vanuit Postman."
    }
    ```

    and header `origin: http://dev.joeplaa.com`.

    This should return 200 OK with response body:

    ```{
        "statusCode": "200"
    }```

* Send a `POST` request to `https://contact.joeplaa.com/dev/contact` with body:

    ```json
    {
        "email":"namejodibooks.com",
        "name":"Name",
        "message":"Dit is een test bericht verstuurd vanuit Postman."
    }
    ```

    and header `origin: http://dev.joeplaa.com`.

    This should return 400 Bad Request with body:

    ```json
    {
        "error": "EMAIL_INVALID"
    }

## Errors

* Have you deployed the API?
* Have you deployed the Lambda function?
* Have you created the Route 53 record?
* Have you used the correct cloudfront address in the Route 53 record?
