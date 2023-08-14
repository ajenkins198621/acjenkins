interface IProps {
    title: string;
    theme: 'brown' | 'blue';
}
export default function SectionHeader({
    title,
    theme
}: IProps) {

    return (
        <div className={`section-header-container section-header-${theme}`}>
            <div className="section-header-container-inner">
                <div className="section-header-shadow" />
                <div className="section-header">
                    <div className="section-header-content">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}