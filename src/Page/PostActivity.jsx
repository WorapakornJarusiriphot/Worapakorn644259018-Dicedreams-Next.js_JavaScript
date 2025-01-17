"use client";

import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  RadioGroup,
  Radio,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Header from "../components/header/Header";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Filter from "../components/Filter";
import SearchIcon from "@mui/icons-material/Search";
import CommentIcon from "@mui/icons-material/Comment"; // สำหรับปุ่มพูดคุย
import LoginIcon from "@mui/icons-material/Login"; // สำหรับปุ่มเข้าสู่ระบบ
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CustomizedMenus from "../components/CustomizedMenus";
import Image from "next/image";

const items = [
  {
    id: 1,
    date: "วันศุกร์ที่ 5 มกราคม  พ.ศ. 2567",
    date_meet: "วันศุกร์ที่ 5 มกราคม  พ.ศ. 2567",
    time_meet: "15:00 น.",
    user: "Outcast Gaming",
    title: "Magic The Gathering Commander 1st friendly match ",
    description:
      "กิจกรรมกระชับมิตรครั้งแรกของผู้เล่น Commander เข้าร่วมฟรี เล่นไม่เป็นสอนให้เป็นในงานเลย",
    num_people: 5,
    participant: 1,
    image:
      "https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/416476126_873313754801109_3349765332781373341_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE9StcFBjPjUnnmkg_qw3uDAZ36wuoHI74BnfrC6gcjvmV7kMGBVULR1sHcswDGdEPffS4XMv4OS0PfSB-QyUpr&_nc_ohc=0zTPiiofghIAb6z15g4&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfDiNvSRLWlzkHNUVrrCOQZygqlmhfZQzgH3U42IDKuNDA&oe=662B302A",
    profile:
      "https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/304959616_494011612731327_7588110616456801443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeELOG1jFmdUKJua60XNc9QbNVI4z2rYQkk1UjjPathCSfqVjWfTn6EK29pzpsExLYWyALGVKiRplkoIQorqTI_t&_nc_ohc=z_uiL-LVgjUAb6wpbmX&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfAH3vGJ0y-9Tsff2LCNOkcrfswVa_XqH-2G88-Vqmi4PQ&oe=662B535D",
  },
  // เพิ่มรายการตามต้องการ
];
function PostActivity() {
  return (
    <div>
      {items.map((item) => (
        <Box
          key={item.id} // เพิ่ม key ที่นี่
          sx={{
            borderColor: "grey.800",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 2,
            marginTop: 3,
            color: "white",
            padding: "16px",
            marginBottom: "16px",
            backgroundColor: "#424242", // ปรับเปลี่ยนเป็นสีเทาเข้มที่นี่
          }}
        >
          <div className="flex items-center mb-3">
            {/* <img
              src={item.profile}
              alt={item.name}
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                marginRight: "16px",
              }}
            /> */}
            <Image
              src={item.image}
              alt={item.name}
              width={500} // กำหนดความกว้างตามที่ต้องการ
              height={300} // กำหนดความสูงตามอัตราส่วนของภาพ
              layout="responsive" // หรือใช้ 'fill', 'fixed', ตามความต้องการ
            />
            <div className="text-left">
              <p className="font-bold">{item.user}</p>
              <p className="text-sm text-white">{item.date}</p>
            </div>
            {/* <IconButton
                    sx={{
                      color: "white", marginRight: "10px", marginLeft: "auto"
                    }}
                    aria-label="menu"
                  >
                    <MoreVertOutlinedIcon />
                  </IconButton> */}
            <IconButton
              sx={{
                color: "white",
                marginRight: "10px",
                marginLeft: "auto",
              }}
              aria-label="menu"
            >
              <CustomizedMenus />
            </IconButton>
          </div>

          <Image
            src={item.image}
            alt={item.title}
            width={526}  // ควรให้ค่าเป็นตัวเลขพิกเซล
            height={296}  // ควรให้ค่าเป็นตัวเลขพิกเซล
            layout="responsive" // ใช้ layout แบบ responsive เพื่อให้ภาพปรับขนาดตามขนาดของ container
            style={{ marginBottom: "16px" }} // กำหนด margin ด้านล่าง
          />
          <div className="text-left">
            <p className="font-bold mb-3">{item.title}</p>
            <p className="mb-3">วันที่เจอกัน: {item.date_meet}</p>
            <p className="mb-3">เวลาที่เจอกัน: {item.time_meet}</p>

            <br />
            <p className="mb-3">{item.description}</p>

            <p className="mb-3">
              สถานที่ : 43/5 ถนนราชดำเนิน (ถนนต้นสน)
              ประตูองค์พระปฐมเจดีย์ฝั่งตลาดโต้รุ่ง
            </p>
            {/* num_people
                  participant */}
            <p className="mb-3">
              จำนวนคนจะไป : {item.participant}/{item.num_people}
            </p>
          </div>
        </Box>
      ))}
    </div>
  );
}

export default PostActivity;
