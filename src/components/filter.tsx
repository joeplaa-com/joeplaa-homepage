import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { FaBackspace } from 'react-icons/fa'
import Tag from '../components/tag'
import { content } from '../utils/data'
import { FilterProps } from '../types'

export default function Filter({ tags }: FilterProps) {
    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    }
    return (
        <section>
            <Row className='filter'>
                <Col className='mx-auto'>
                    <Card>
                        <CardBody>
                            <Row className='d-flex justify-content-between align-items-center'>
                                <Col className='align-items-center flex-wrap tags'>
                                    {tags.map(tag => (
                                        <Tag key={tag.value} tag={tag} />
                                    ))}
                                </Col>
                                <Col xs='auto' className='mt-2 mt-sm-0 ml-auto'>
                                    <Button outline color='primary' onClick={toggle} aria-label='filter-button'>
                                        <FaBackspace />if page === tags show back button, else show nothing.
                                        <span className={'d-none d-sm-inline'}>{' '}{content.Back}</span>
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}