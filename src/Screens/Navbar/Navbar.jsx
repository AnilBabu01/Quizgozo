import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import { secondaryColor } from "../../utils/colorVariables";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from "../../../redux/actions/authActions";
import { backendUrl } from "../../config/config";
import logo from "../../assets/logo.png";
import chart from "../../assets/chart.png";
import Home from "../../assets/Home.png";
import Search from "../../assets/Search.png";
import Hurt from "../../assets/Hurt.png";
import "./Navbar.css";
function Navbar({ open, setOpen, setLoadingshow }) {
  const router = useNavigate();
  // const dispatch = useDispatch();
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const [navbar, setnavbar] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const [showmenu1, setshowmenu1] = useState(false);
  const [showmenu2, setshowmenu2] = useState(false);
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  //   useEffect(() => {
  //     // dispatch(loadUser());
  //   }, []);

  //  const logout = () => {
  //     localStorage.removeItem("erptoken");
  //     setLoadingshow(true);
  //     dispatch(loadUser());
  //     router.push("/");
  //     if (!localStorage.removeItem("erptoken")) {
  //       toast.success("You Have Logout Successfully!!", {
  //         autoClose: 1000,
  //       });
  //     }
  //     // setTimeout(() => {
  //     //   setLoadingshow(false);
  //     // }, 10);
  //   };

  //   const changebackgrou = () => {
  //     if (window.scrollY >= 80) {
  //       setnavbar(true);
  //     } else {
  //       setnavbar(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", changebackgrou);
  //   }, []);

  return (
    <>
      {open2 && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open2}
          onClose={handleClose1}
          onClick={handleClose1}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose1}>
            <Avatar
              alt="user"
              // src={`${backendUrl}public/upload/${user?.data[0]?.profileurl}`}
              src={""}
            />
            {/* {user?.data[0]?.name} */}
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => router.push("/profile")}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Update Your Profile
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Change Password
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      )}

      <nav className={navbar ? "main_div_header_scroll" : "main_div_header"}>
        <i
          className="main_div_is_hai_na"
          onClick={() => setisMobile(!isMobile)}
        >
          {isMobile ? (
            <>
              <CloseIcon style={{ height: "40px" }} className="burger" />
            </>
          ) : (
            <>
              <MenuIcon style={{ height: "40px" }} className="burger" />
            </>
          )}
        </i>

        <Link
          className="logodivlinnk"
          href="/"
          onClick={() => setisMobile(false)}
        >
          <div className="logoimg">
            {navbar ? (
              <>
                <img src={logo} alt="Logo" />
                <div>
                  <p>GoZo Points</p>
                  <p>5000</p>
                </div>
              </>
            ) : (
              <>
                <img src={logo} alt="Logo" />
                <div className="pointdiv">
                  <p>
                    GoZo Points <br /> <span className="pointNo"> 50,000 </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </Link>

        <div className={isMobile ? "main_div_header10" : "main_div_header10"}>
          <div className="mainlinkdiv">
            <Link
              className={
                router.pathname === "/" ? "link_directActive" : "link_direct"
              }
              href="/"
            >
              <img className="menuicon" src={Home} alt="home" /> Home
            </Link>
          </div>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <div className="mainlinkdiv">
            <Link
              className={
                router.pathname === "/" ? "link_directActive" : "link_direct"
              }
              href="/"
            >
              <img className="menuicon" src={Search} alt="home" /> Search
            </Link>
          </div>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <div className="mainlinkdiv">
            <Link
              className={
                router.pathname === "/" ? "link_directActive" : "link_direct"
              }
              href="/"
            >
              <img className="menuicon" src={Hurt} alt="home" /> Wishlist
            </Link>
          </div>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <div className="mainlinkdiv">
            <Link
              className={
                router.pathname === "/" ? "link_directActive" : "link_direct"
              }
              href="/"
            >
              <img className="menuicon" src={chart} alt="home" /> Rank
            </Link>
          </div>
          &nbsp;&nbsp; &nbsp;&nbsp;
        </div>

        {isAuthenticated ? (
          <div onClick={handleClick1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "3rem",
              }}
            >
              {/* {user?.data[0]?.profileurl ? (
                <>
                  <Avatar
                    alt="user"
                    src={`${backendUrl}public/upload/${user?.data[0]?.profileurl}`}
                    sx={{
                      width: 35,
                      height: 35,
                    }}
                  />
                </>
              ) : (
                <>
                  <Avatar
                    alt="user"
                    // src={`${backendUrl}${user && user?.data[0]?.profileurl}`}
                    sx={{
                      width: 35,
                      height: 35,
                    }}
                  />
                </>
              )} */}

              <Avatar
                alt="user"
                // src={`${backendUrl}${user && user?.data[0]?.profileurl}`}
                sx={{
                  width: 35,
                  height: 35,
                }}
              />

              {/* <IconButton size="small" aria-label="more">
                <ArrowDropDownOutlinedIcon
                  size="large"
                  sx={{ color: secondaryColor }}
                />
              </IconButton> */}
            </Box>
          </div>
        ) : (
          <>
            <button
              onClick={() => handleClickOpen()}
              className="loginbtnHeader"
            >
              Login
            </button>
          </>
        )}
      </nav>
      <div className={isMobile ? "open1 " : "menu-div"}>
        <div className="closeinmobile">
          <i
            className="main_div_is_hai_na"
            onClick={() => setisMobile(!isMobile)}
          >
            {isMobile ? (
              <>
                <CloseIcon style={{ height: "40px" }} className="burger" />
              </>
            ) : (
              <>
                <MenuIcon style={{ height: "40px" }} className="burger" />
              </>
            )}
          </i>
        </div>

        {isAuthenticated ? (
          <>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <Link
                className={
                  router.pathname === "/mainadmin/dashbord"
                    ? "link_directActive"
                    : "link_direct10"
                }
                href="/mainadmin/dashboard"
              >
                Dashboard
              </Link>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <Link
                className={
                  router.pathname === "/"
                    ? "link_directActive"
                    : "link_direct10"
                }
                href="/"
              >
                Clients
              </Link>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <Link
                className={
                  router.pathname === "/"
                    ? "link_directActive"
                    : "link_direct10"
                }
                href="/"
              >
                Active Plans
              </Link>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <Link
                className={
                  router.pathname === "/"
                    ? "link_directActive"
                    : "link_direct10"
                }
                href="/"
              >
                Exhausted Plans
              </Link>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <Link
                className={
                  router.pathname === "/"
                    ? "link_directActive"
                    : "link_direct10"
                }
                href="/"
              >
                Guest Clients
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <Link
                className={
                  router.pathname === "/"
                    ? "link_directActive"
                    : "link_direct10"
                }
                href="/"
              >
                Home
              </Link>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <div
                onClick={() => setshowmenu2(!showmenu2)}
                className="add_icons_div"
              >
                <p>Services</p> {showmenu2 ? <RemoveIcon /> : <AddIcon />}
              </div>
            </MenuItem>

            <div className={showmenu2 ? "menu_show" : "menu_hide"}>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem>
                <Link
                  onClick={() => setisMobile(!isMobile)}
                  className={({ isActive }) =>
                    isActive ? "link_directActive" : "link_directs"
                  }
                  href="/"
                >
                  Android Development
                </Link>
              </MenuItem>

              <Divider sx={{ my: 0.5 }} />
              <MenuItem>
                <Link
                  className={({ isActive }) =>
                    isActive ? "link_directActive" : "link_directs"
                  }
                  href="/sds"
                >
                  Web Development
                </Link>
              </MenuItem>
            </div>

            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <div
                onClick={() => setshowmenu2(!showmenu2)}
                className="add_icons_div"
              >
                <Link
                  className={
                    router.pathname === "/dd"
                      ? "link_directActive"
                      : "link_direct10"
                  }
                  href="/ss"
                >
                  Learning
                </Link>
              </div>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>
              <div
                onClick={() => setshowmenu2(!showmenu2)}
                className="add_icons_div"
              >
                <Link
                  className={
                    router.pathname === "/dd"
                      ? "link_directActive"
                      : "link_direct10"
                  }
                  href="/ss"
                >
                  Help Center
                </Link>
              </div>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
