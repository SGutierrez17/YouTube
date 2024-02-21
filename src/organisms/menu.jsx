import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, List, ListItem, ListItemButton, ListItemText} from '@mui/material';

import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';

import shorts from '../assets/images/shorts youtube.svg'
import suscripcion1 from '../assets/images/suscripcion1.jpg'
import suscripcion2 from '../assets/images/suscripcion2.jpg'
import suscripcion3 from '../assets/images/suscripcion3.jpg'
import suscripcion4 from '../assets/images/suscripcion4.jpg'
import suscripcion5 from '../assets/images/suscripcion5.jpg'
import youtubepremium from '../assets/images/youtube1.svg'
import youtubestudio from '../assets/images/youtube2.svg'
import youtubemusic from '../assets/images/youtube3.svg'
import youtubekids from '../assets/images/youtube4.svg'

const MARGIN_ICON = {mr: '28px', ml:'12px', fontSize:30}
const ICON_BG = {
    color: '#0F1419',
    borderRadius:'12px'
}
const MARGIN_AVATAR = {
    m:'0 28px 0 12px', 
    width:'30px', 
    height:'30px'
}

export default function Menu() {
return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar position="static" >
            <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2}}
            >
            <MenuIcon fontSize="large"/>
            </IconButton>
            <YouTubeIcon sx={{color:'red', cursor:'pointer', fontSize:42}}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:'flex', cursor:'pointer', fontWeight:'bold', fontSize: 26, letterSpacing:-1}}>
            YouTube <span style={{fontSize:12, paddingLeft:'8px'}}>co</span>
            </Typography>
            </Toolbar>
            <List item sx={{display:'flex', flexDirection:'column'}}>
            <ListItem disablePadding sx={{backgroundColor:'#EEEEEE', borderRadius:'12px'}}>
                <ListItemButton sx={ICON_BG}>
                    <HomeIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Inicio'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={shorts} sx={{m:'0 28px 0 12px', width:'30px', height:'30px'}}/>
                    <ListItemText primary= 'Shorts'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SubscriptionsOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Suscripciones'/>
                </ListItemButton>
            </ListItem>
            <hr width={260}/>
            <ListItem disablePadding >
                <ListItemButton sx={ICON_BG}>
                    <ListItemText sx={MARGIN_ICON} primary= 'Tú' primaryTypographyProps={{ style: { fontSize: '1.2rem', fontWeight:'600' } }} />  
                    <ArrowForwardIosIcon fontSize='extrasmall'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <AccountBoxOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Tu canal'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <HistoryOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Historial'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SlideshowOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Mis vídeos'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <AccessTimeOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Ver más tarde'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <ThumbUpOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Videos favoritos'/>
                </ListItemButton>
            </ListItem>
            <hr width={260}/>
            <ListItem disablePadding >
                <ListItemText sx={{m:'8px 30px'}} primary= 'Suscripciones' primaryTypographyProps={{ style: { fontSize: '1.2rem' , fontWeight:'600'} }} />  
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={suscripcion1}  sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'Wild stories'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={suscripcion2} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'National Geographic'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={suscripcion3} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'History Latam'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={suscripcion4} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'Directv sports'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={suscripcion5} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'Perros criollos'/>
                </ListItemButton>
            </ListItem>
            <hr width={260}/>
            <ListItem disablePadding >
                <ListItemText sx={{m:'8px 30px'}} primary= 'Explorar' primaryTypographyProps={{ style: { fontSize: '1.2rem' , fontWeight:'600'} }} />  
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <WhatshotOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Tendencias'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <MusicNoteOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Música'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SensorsOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'En directo'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SportsEsportsOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Videojuegos'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <AnalyticsOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Noticias'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <EmojiEventsOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Deportes'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <TipsAndUpdatesOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Aprendizaje'/>
                </ListItemButton>
            </ListItem>
            <hr width={260}/>
            <ListItem disablePadding >
                <ListItemText sx={{m:'8px 30px'}} primary= 'Más de YouTube' primaryTypographyProps={{ style: { fontSize: '1.2rem' , fontWeight:'600'} }} />  
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={youtubepremium} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'YouTube Premium'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={youtubestudio} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'YouTube Studio'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={youtubemusic} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'YouTube Music'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={youtubekids} sx={MARGIN_AVATAR}/>
                    <ListItemText primary= 'YouTube Kids'/>
                </ListItemButton>
            </ListItem>
            <hr width={260}/>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SettingsOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Configuración'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <FlagOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Denuncias'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <HelpOutlineOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Ayuda'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <AnnouncementOutlinedIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Enviar sugerencias'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
    );
}