import { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'

import { UserContext } from '../context/userContext'

function Home() {

    const [state, dispatch] = useContext(UserContext)

    return (
        <Container className="my-5">
            <Card className="shadow">
                <Card.Img variant="top" src="https://getwallpapers.com/wallpaper/full/6/2/1/790650-gorgerous-hd-nature-wallpapers-1920x1080.jpg" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Home
