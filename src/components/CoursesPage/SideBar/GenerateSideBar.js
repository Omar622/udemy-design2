import SideBarContainer from "./SideBarContainer";
import useScroll from "../../../hooks/useScroll";

function GenerateSideBar(props) {
    const { y } = useScroll();

    const generate = () => {
        if (y < 300)
            return (
                <SideBarContainer
                    {...props}
                    positionState="Absolute"
                    top="105px"
                />
            );
        else return <SideBarContainer {...props} positionState="Fixed" />;
    };

    return generate();
}

export default GenerateSideBar;
