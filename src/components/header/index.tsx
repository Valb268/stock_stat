import Logo from "./Logo";
import Navigation from './Navigation';
import {HeaderStyled, ULcontacts} from './styles/headerStyles';

const Header = () => {

    return (
        <HeaderStyled>
            <Logo/>
            <Navigation/>
            <ULcontacts>
                <li>oll@investing.com</li>
                <li>+972 53 111111</li>
            </ULcontacts>
        </HeaderStyled>


    );
}

export default Header;
