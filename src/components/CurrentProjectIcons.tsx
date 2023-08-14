import ReactWhite from './images/svgs/ReactWhite';
import JavaScriptWhite from './images/svgs/JavaScriptWhite';
import LessWhite from './images/svgs/LessWhite';
import JQueryWhite from './images/svgs/JQueryWhite';
import BootstrapWhite from './images/svgs/BootstrapWhite';
import TypeScriptWhite from './images/svgs/TypeScriptWhite';
import ReduxWhite from './images/svgs/ReduxWhite';
import NodeJSWhite from './images/svgs/NodeJsWhite';
import LaravelWhite from './images/svgs/LaravelWhite';
import TailwindWhite from './images/svgs/TailwindWhite';
import AntDesignWhite from './images/svgs/AntDesignWhite';



interface IProps {
    icons: string[];
}

export default function CurrentProjectIcons({
    icons
}: IProps) {
    const display : JSX.Element[] = [];
    icons.forEach((icon, index) => {
        switch (icon) {

            case 'React':
                display.push(<ReactWhite key={index} />);
                break;
            case 'JavaScript':
                display.push(<JavaScriptWhite key={index} />);
                break;
            case 'Less':
                display.push(<LessWhite key={index} />);
                break;
            case 'jQuery':
                display.push(<JQueryWhite key={index} />);
                break;
            case 'Bootstrap':
                display.push(<BootstrapWhite key={index} />);
                break;
            case 'TypeScript':
                display.push(<TypeScriptWhite key={index} />);
                break;
            case 'Redux':
                display.push(<ReduxWhite key={index} />);
                break;
            case 'NodeJS':
                display.push(<NodeJSWhite key={index} />);
                break;
            case 'Laravel':
                display.push(<LaravelWhite key={index} />);
                break;
            case 'Tailwind':
                display.push(<TailwindWhite key={index} />);
                break;
            case 'Ant Design':
                display.push(<AntDesignWhite key={index} />);
                break;
            default:
                break;




        }
    });
    return (
        <>
            {display}
        </>
    );
}