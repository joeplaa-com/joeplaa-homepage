import { useState } from 'react'
import { Button, Card, CardBody, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Tag from '../components/tag'
import { data } from '../lib/data'
import { applicationActionCreators } from '../store/actions/application'
import { FilterProps, LabelProps } from "../types"

const animatedComponents = makeAnimated();

export default function Filter({ page, tags }: FilterProps) {
    const dispatch = useDispatch();
    const application = useSelector((state) => state.application);

    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    }

    function setFilter(el: LabelProps) {
        console.log(el)
        application.filter[page].filter(tag => tag.value === el.value).length > 0
            ? applicationActionCreators.removeTagFilter(page, el)
            : applicationActionCreators.addTagFilter(page, el);
    }

    function resetFilter() {
        dispatch(applicationActionCreators.resetTagFilter())
        toggle();
    }

    return (
        <section>
            <Row className='filter'>
                <Col className='mx-auto'>
                    <Card className='mb-2 mt-2'>
                        <CardBody>
                            <Row>
                                <Col>
                                    {data.SelectedTags}{': '}{application.filter[page].map((tag) => (
                                        <Tag key={tag.value} tag={tag} page={page} />
                                    ))}
                                </Col>
                                <Col xs='auto' className='float-right'>
                                    <Button outline color="primary" onClick={toggle}>{data.Filter}</Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={application.filter[page]}
                        isMulti
                        name="tags"
                        options={tags}
                        onChange={setFilter}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Ok</Button>{' '}
                    <Button color="secondary" onClick={resetFilter}>Reset filter</Button>
                </ModalFooter>
            </Modal>
        </section>
    );
}