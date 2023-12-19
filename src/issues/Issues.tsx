import Sidebar from './components/Sidebar'
import IssuesTable from './components/IssuesTable';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from "@mui/joy";

function Issues() {
    return (
      <CssVarsProvider defaultMode="system">
        <CssBaseline />
          <Sheet sx={{bgcolor: "background.body"}} className="w-full h-full">
            <div className="Issues m-0 p-0 h-full">
              <Grid container className='w-full h-full'>
                <Sidebar />
                <Sheet>
                  <h1 className='text-2xl'>Issues Page</h1>
                  <IssuesTable />
                </Sheet>
              </Grid>
            </div>
          </Sheet>
      </CssVarsProvider>
    );
  }

export default Issues;