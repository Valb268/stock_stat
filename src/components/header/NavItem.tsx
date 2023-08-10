import {Item} from "../../utils/types.d";
import {Link} from "react-router-dom";
import {LinkStyled, ListItemsHeaderStyled } from "./styles/headerStyles";

interface Props {
    item: Item
}
const NavItem = ({item}: Props) => {

    return (
        <ListItemsHeaderStyled>
            <LinkStyled to={item.route}>{item.title}</LinkStyled>
        </ListItemsHeaderStyled>
    );
};

export default NavItem;