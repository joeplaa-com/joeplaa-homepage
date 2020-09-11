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

    function setFilter(el: Array<LabelProps>) {
        dispatch(applicationActionCreators.setTagsFilter('blog', el))
    }

    function applyFilter() {
        //dispatch(applicationActionCreators.setTagsFilter('blog', application.filter[page]))
        toggle();
    }

    function resetFilter() {
        dispatch(applicationActionCreators.resetTagFilter());
    }

    return (
        <section>
            <Row className='filter'>
                <Col className='mx-auto'>
                    <Card className='mb-2 mt-2'>
                        <CardBody>
                            <Row>
                                <Col>
                                    {data.SelectedTags}{': '}{application.filter[page].length > 0 && application.filter[page].map((tag) => (
                                        <Tag key={tag.value} tag={tag} page={page} />
                                    ))}
                                </Col>
                                <Col xs='auto' className='float-right'>
                                    <Button outline color="primary" onClick={resetFilter}>Show all</Button>{' '}
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
                    <Button color="primary" onClick={applyFilter}>Ok</Button>{' '}
                </ModalFooter>
            </Modal>
        </section>
    );
}