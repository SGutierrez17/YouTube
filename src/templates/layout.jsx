import {Box, CssBaseline, Grid} from '@mui/material';
import { grey } from '@mui/material/colors';

export default function Layout(){
    // const [menu, header] = children;

    return (
        <Box style={{display: "flex"}}>
            <CssBaseline/>
            <Grid container m={2}>
                <Grid item flexBasis={260}>
                    <Grid xs={12}>menu</Grid>
                    {/* <Grid xs={12} bgcolor={grey[400]} height={100}>inicio</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>tu</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>suscripciones</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>explorar</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>mas de youtube</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>configuracion</Grid> */}
                </Grid>
                <Grid item flex={1}>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>header</Grid>
                    <Grid xs={12} bgcolor={grey[400]} height={100}>branding</Grid>
                    <Grid container>
                    <Grid container>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi1</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi2</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid>kpi3</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi4</Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi1</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi2</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid>kpi3</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi4</Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi1</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi2</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid>kpi3</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi4</Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi1</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi2</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid>kpi3</Grid>
                        </Grid>
                        <Grid xs={3} bgcolor={grey[400]} height={100}>
                        <Grid >kpi4</Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        )
}
