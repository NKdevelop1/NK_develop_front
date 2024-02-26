import { Link } from "react-router-dom";

import UserCircle from "../assets/header/profile.png"
import List from "../assets/header/List.png"
import Bell from "../assets/header/Bell.png"
import Bell_notice from "../assets/header/Bell_notice.png"

const MobileMenu = ({student_route, teacher_route, parent_route, onClick, role, pathname}) => {
    
    return (
      <div>
        <div className="w-screen h-screen bg-black opacity-50 fixed top-0 z-10" onClick={onClick}></div>
        <div className="w-[37%] h-screen bg-whiteTotal opacity-100 fixed top-0 right-0 z-20">
          <div className="mobile:flex tablet_change:hidden items-center justify-center gap-[6px] mt-[24px]" >
            {/* 공지가 있다면 Bell_notice로 바뀔예정 */}
            <img src={Bell} alt="bell" className="w-[25px] h-[25px] mr-[2px]" />
            <img src={UserCircle} alt="user" className="w-[25px] h-[25px] " />
            <div className="font-nanum_400 text-[14px] text-black">
              홍길동 {/* 학생이름 들어갈 예정 */}
            </div>
            <div className={`font-nanum_700 text-[13px] text-white rounded-[8px] px-[7px] h-[21px] flex items-center justify-center
              ${role === "학생" ? " bg-main1" : role === "선생님" ? " bg-main2" : " bg-main3"}`}
            >
              {role}
            </div>
            <img src={List} alt="listbar" onClick={onClick} className="w-[32px] h-[32px] ml-[17px] mobile:block tablet_change:hidden" />
          </div>
          <div className="mobile:flex tablet_change:hidden flex-col justify-between gap-[44px] font-nanum_700 text-[16px] text-black ml-[33px] mt-[40px]">
            {role === "학생" && student_route.map((item,id) => {
              return (
                <Link key={id} to={item.href} className={`${pathname === item.href && " text-main1"}`}>
                  {item.title}
                </Link>
              )
            })}
            {role === "선생님" && teacher_route.map((item,id) => {
              return (
                <Link key={id} to={item.href} className={`${pathname === item.href && " text-main1"}`}>
                  {item.title}
                </Link>
              )
            })}
            {role === "학부모" && parent_route.map((item,id) => {
              return (
                <Link key={id} to={item.href} className={`${pathname === item.href && " text-main1"}`}>
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default MobileMenu;