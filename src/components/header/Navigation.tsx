import { navItems } from "../../utils/constants";
import NavItem from "./NavItem";
import { NavHeader } from './styles/headerStyles';

const Navigation = () => {
    return (
        <NavHeader>
            <ul style={{display: 'flex'}}>
                {navItems.map(item => <NavItem key={item.route} item={item}/>)}
            </ul>
        </NavHeader>
    );
};

export default Navigation;