import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { numberSeparator } from "../../utils/utils";

// function valuetext(value) {
//   console.log(value)
// }

const minDistance = 1;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box>
      <Slider
        // getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        // valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        disableSwap
      />
      <section className="text-dark-color pt-2" style={{ fontSize: ".8rem" }}>
        <span className="">از</span>
        <span className="px-1 fw-bold">
          {numberSeparator(Math.abs(value1[1] - 100) * 150_000)}
        </span>
        <span className="">تومان </span>
        <span className=""> تا </span>
        <span className="fw-bold">
          {numberSeparator((100 - value1[0]) * 150_000)}
        </span>
        <span className="px-1">تومان</span>
      </section>
      <div className="pt-4">
        <button className="border-0 rounded-2 px-3 py-2 bg-primary text-white " >فیلتر قیمت</button>
      </div>
    </Box>
  );
}
