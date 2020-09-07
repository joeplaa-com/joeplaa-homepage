import { Container } from "reactstrap"
import Copyright from './copyright'
import Social from './social'

export default function Footer() {
    return (
        <footer>
            <Container>
                <Copyright color='light' />
                <Social classString='justify-content-center' color='light' />
            </Container>
        </footer>
    );
}
