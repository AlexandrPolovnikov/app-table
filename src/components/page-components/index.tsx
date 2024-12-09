import ControlPanel from "./control-panel";
import FirstBlock from "./first-block";
import classes from "./index.module.scss";
import SecondBlock from "./second-block";
export default function MainPage() {
    return (
        <div className={`${classes.wrapper} content `}>
            <FirstBlock />
            <ControlPanel />
            <SecondBlock />
        </div>
    );
}
