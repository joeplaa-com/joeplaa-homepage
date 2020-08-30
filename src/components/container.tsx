import { IContainerProps } from '../interfaces'

export default function Container({ children }: IContainerProps) {
    return <div className="container mx-auto px-5">{children}</div>;
}
