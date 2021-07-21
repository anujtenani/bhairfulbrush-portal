import {Container, Row, Col, Image} from "react-bootstrap";
import styles from '../styles/Inspiration.module.css'

const Inspiration = () => {
    return (
        <div>
            <h2 style={{textAlign: "center", padding: "1rem"}}>Inspiration</h2>

            <Container>
                <Row>
                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>

                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>

                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>

                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>

                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>

                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>

                    <Col>
                        <Image src={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} className={styles.image} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Inspiration