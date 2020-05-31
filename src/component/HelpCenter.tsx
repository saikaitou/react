import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HelpInfo from '../model/HelpInfo';
import helpCenterService from '../service/help-center.service';

const useStyles = makeStyles(() => ({
    paper: {
        paddingTop: 48,
        paddingBottom: 60,
        paddingLeft: 8,
        paddingRight: 8
    },
}));

const HelpCenter: React.FC = () => {

    const classes = useStyles({});

    // State Hook: https://zh-hans.reactjs.org/docs/hooks-state.html
    const [helpInfoList, setHelpInfoList] = useState<HelpInfo[]>([]);

    // Effect Hook: https://zh-hans.reactjs.org/docs/hooks-effect.html
    // 箭头函数： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    useEffect(() => {
        helpCenterService.getHelpCenterData().then(list => setHelpInfoList(list));
    }, []);

    return (
        <>
            {/* MATERIAL-UI: https://material-ui.com/zh/ */}
            <Container maxWidth="lg" style={{ marginTop: 24 }}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" color="primary">欢迎来到Trip7！请问有什么可以帮到您？</Typography>
                    {/* TODO: 完成帮助中心列表功能 */}
                </Paper>
            </Container>
        </>
    );
}

export default HelpCenter;