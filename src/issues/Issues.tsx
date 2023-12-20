import Sidebar from './components/Sidebar'
import IssuesTable from './components/IssuesTable';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from "@mui/joy";
import BasicModalDialog from './components/test';
import IssueModal from './components/IssueModal';

function Issues() {
    return (
      <CssVarsProvider defaultMode="system">
        <CssBaseline />
          <Sheet sx={{bgcolor: "background.body"}} className="w-full h-full">
            <div className="Issues m-0 p-0 h-full">
              {/* <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid>
                  <Sidebar />
                </Grid>
                <Grid>
                  <Sheet>
                    <h1 className='text-2xl'>Issues Page</h1>
                    <IssuesTable />
                  </Sheet>
                </Grid>
              </Grid> */}
              
              <Stack
                direction="row"
              >
                <Sidebar />
                <Sheet sx={{bgcolor: "background.body"}} className='flex justify-center'>
                  <Box className='w-3/4'>
                    <h1 className='text-2xl'>Issues Page</h1>
                    <IssueModal />
                    <IssuesTable />
                  </Box>
                </Sheet>
              </Stack>
            </div>
          </Sheet>
      </CssVarsProvider>
    );
  }

export default Issues;