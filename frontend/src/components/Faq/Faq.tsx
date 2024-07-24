import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { rootColors } from '../../Utilities/rootColors';

const Faq: React.FC = () => {

    return (
        <Stack
            sx={{
                flexDirection: { xs: 'column', md: 'row' },

                gap: { xs: 3, md: 0 },
                mt: 8
            }}>
            <Stack sx={{ width: '100%', gap: 2 }}>
                <Typography variant='h3'>
                    Frequently Asked Questions
                </Typography>
                <Typography variant='subtitle2'>
                    Couldn't find what you were looking for?
                </Typography>
                <Typography variant='subtitle2'>
                    Write us at <span
                        style={{
                            textDecoration: 'underline',
                            color: rootColors?.primary
                        }}>
                        support@graydigital.com
                    </span>
                </Typography>
            </Stack>
            <Stack sx={{ width: '100%', gap: 2 }}>

                <Accordion sx={{ bgcolor: rootColors?.secondry, }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"

                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ bgcolor: rootColors?.secondry }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Accordion 2
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ bgcolor: rootColors?.secondry }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Accordion 3
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Stack>
    )
}

export default Faq