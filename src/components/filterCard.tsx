import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Filter from './filter'
import { FilterProps } from '../types'

export default function FilterCard({ buttonType, page, pathname, tags }: FilterProps) {
    return (
        <section>
            <Card>
                <CardBody>
                    <Filter buttonType={buttonType} page={page} pathname={pathname} quantity={true} tags={tags} />
                </CardBody>
            </Card>
        </section>
    );
}