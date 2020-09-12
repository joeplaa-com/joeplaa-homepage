import { useState } from 'react'
import { Button, Card, CardBody, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Tag from '../components/tag'
import { data } from '../lib/data'
import { filterActionCreators } from '../store/actions/filter'
import { FilterProps, LabelProps } from "../types"

const animatedComponents = makeAnimated();

export default function Filter({ page, tags }: FilterProps) {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    }

    function setFilter(el: Array<LabelProps>) {
        dispatch(filterActionCreators.setTagsFilter('blog', el))
    }

    function applyFilter() {
        //dispatch(filterActionCreators.setTagsFilter('blog', filter.userFilter[page]))
        toggle();
    }

    function resetFilter() {
        dispatch(filterActionCreators.resetTagFilter());
    }

    return (
        <section>
            <Row className='filter'>
                <Col className='mx-auto'>
                    <Card className='mb-2 mt-2'>
                        <CardBody>
                            <Row>
                                <Col>
                                    {data.SelectedTags}{': '}{filter.userFilter[page].length > 0 && filter.userFilter[page].map((tag) => (
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
                        defaultValue={filter.userFilter[page]}
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