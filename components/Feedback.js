import {Container, Card, CardDeck, Button, Image} from "react-bootstrap";
import styles from '../styles/Feedback.module.css'

const Feedback = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
            <Container fluid style={{padding: '2rem'}}>
                <h3 style={{textAlign: "center", paddingBottom: '2rem', color: "white"}}>Our Partners love BEHAIRFUL</h3>
                <CardDeck>
                    <Card style={{borderRadius: '25px'}}>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} roundedCircle />
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}}>Maegan Blinka</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias animi architecto cumque deleniti distinctio dolorem dolores ducimus eligendi eos error eum eveniet facilis fugit, hic ipsam iure laborum libero minus natus, neque quidem reiciendis, soluta tempora tempore ut vero voluptate? Ab accusantium alias deleniti iure nam necessitatibus odio, reiciendis.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{borderRadius: '25px'}}>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} roundedCircle />
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}}>Stacy Joy</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem consequatur corporis, delectus dolor dolorem ex id laudantium pariatur praesentium quae qui reiciendis rerum tempora velit voluptatem! Ad aut dolor ea laboriosam minima molestiae molestias tenetur. Consectetur dignissimos earum est, eum itaque laboriosam minus officiis quam. Debitis, molestias, pariatur.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{borderRadius: '25px'}}>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} roundedCircle />
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}}>Kim</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae, corporis delectus doloribus ducimus explicabo fuga harum, ipsum itaque laudantium libero magni minima nam natus nihil, praesentium quae quibusdam reiciendis reprehenderit similique. Architecto at cupiditate ea eligendi necessitatibus quae. Corporis dolore eligendi eum impedit ipsam, iusto molestiae nobis obcaecati quis!
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{borderRadius: '25px'}}>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} roundedCircle />
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}}>Christina Rodriguez</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur culpa, exercitationem labore laudantium necessitatibus placeat porro quasi quis quisquam, sed, sequi. Aperiam asperiores commodi consequatur culpa debitis delectus dolore earum enim expedita fugiat incidunt ipsum officiis porro possimus, quae quasi recusandae reiciendis repellat repellendus saepe sunt tempora vero voluptatum?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
}

export default Feedback