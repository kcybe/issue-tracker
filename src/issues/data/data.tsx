import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const labels = [
    {
      value: "moto",
      label: "Moto",
    },
    {
      value: "mob",
      label: "Mobi",
    },
    {
      value: "concept",
      label: "Concept",
    },
  ]
  
  export const statuses = [
    {
      value: "todo",
      label: "Todo",
      icon: RadioButtonUncheckedIcon,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: AvTimerIcon,
    },
    {
      value: "closed",
      label: "Closed",
      icon: CheckCircleOutlineRoundedIcon,
    },
    {
      value: "open",
      label: "Open",
      icon: RadioButtonUncheckedIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownwardRoundedIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowForwardRoundedIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpwardRoundedIcon,
    },
  ]