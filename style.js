import { styled } from "@mui/material/styles";

const WalletDropdownBlockOuter = styled("div")`
  & > .WalletDropdown {
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 0;
  }
  .dropdown-menu.show {
    transform: translate(0px, 41px) !important;
  }
  .HiddeenId {
    font-size: 14px;
  }
  img {
    max-width: 30px;
    max-height: 30px;
  }
  .WalletDropdownBlocknner {
    align-items: center;
  }
  .WalletDropdownSmalltitle,
  .WalletDropdownamount {
    display: none;
  }
`;

<WalletDropdownBlockOuter></WalletDropdownBlockOuter>;
