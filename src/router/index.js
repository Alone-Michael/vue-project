
import Icons from "../components/SubList/Icons";
import Simple_Tables from "../components/SubList/Simple_Tables";
import Forms from "../components/SubList/Forms";
import Echarts from "../components/SubList/Echarts";
import notFound from "../components/SubList/Not_Found";
import Editors from "../../../myui/src/components/Editors";
import Advanced from "../components/SubList/Advanced";
import Data_Table from "../components/SubList/Data_Table";
import Conditions from "../components/SubList/Conditions";
//路由需要使用的组件

export default [
    {path:'/home/icons',name:'icons',component:Icons},
    {path:'/home/st',name:'st',component:Simple_Tables},
    {path:'/home/ge',name:'ge',component:Forms},
    {path:'/home/chartJS',name:'chartJS',component:Echarts},
    {path:'/home/ed',name:'ed',component:Editors},
    {path:'/home/ad',name:'ad',component:Advanced},
    {path:'/home/dt',name:'dt',component:Data_Table},
    {path:'/home/flot',name:'flot',component:Conditions},
    {path:'*',component:notFound},
  ]
