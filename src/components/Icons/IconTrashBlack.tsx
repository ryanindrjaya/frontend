import SvgIcon from "@mui/material/SvgIcon";

const IconTrashBlack = ({
    size = 22,
    color = "#121212"
}) => (
    <SvgIcon sx={{ fontSize: size, color: color }}>
        <path d="M5.755 20.283L4 8H20L18.245 20.283C18.1769 20.7596 17.9391 21.1956 17.5754 21.511C17.2117 21.8264 16.7464 22 16.265 22H7.735C7.25358 22 6.7883 21.8264 6.42458 21.511C6.06086 21.1956 5.82312 20.7596 5.755 20.283ZM21 4H16V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2H9C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3V4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2 5.26522 2.10536 5.51957 2.29289 5.70711C2.48043 5.89464 2.73478 6 3 6H21C21.2652 6 21.5196 5.89464 21.7071 5.70711C21.8946 5.51957 22 5.26522 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4Z" fill="#121212" />
    </SvgIcon>
);

export default IconTrashBlack;