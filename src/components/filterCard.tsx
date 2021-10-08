import React, { ReactElement } from 'react';
import { Card, CardBody } from 'reactstrap';
import Filter from './filter';
import { FilterProps } from '../types';

export default function FilterCard({ buttonType, page, tags, template }: FilterProps): ReactElement {
    return (
        <section>
            <Card>
                <CardBody>
                    <Filter buttonType={buttonType} page={page} quantity={true} tags={tags} template={template} />
                </CardBody>
            </Card>
        </section>
    );
}
