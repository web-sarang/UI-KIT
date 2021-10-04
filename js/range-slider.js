const rangeSlider = document.getElementById('range-slider');
const step1Slider = document.getElementById('step1-slider');
const slider = document.getElementById('slider');
const tooltipSlider = document.getElementById('tooltips__slider');

const tooltipSliderMix = document.getElementById('tooltips-mix__slider');
const tooltipOneSlider = document.getElementById('tooltip-one__slider');


if (slider) {
  
noUiSlider.create(slider, {
    start: 40,
    behaviour: 'snap',
    connect: [true, false],
    range: {
        'min': 20,
        'max': 80
    }
});
}

if (rangeSlider) {

    noUiSlider.create(rangeSlider, {
        start: [20, 80],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    }); 
}


if (tooltipOneSlider) {
    noUiSlider.create(tooltipOneSlider, {
        start: 15,
        step: 1,
        tooltips: true,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 30
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });    

}

if (tooltipSlider) {
    noUiSlider.create(tooltipSlider, {
        start: [15, 34],
        step: 1,
        tooltips: [true, true],
        connect: true,
        range: {
            'min': 0,
            'max': 50
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });    

}


if (tooltipSliderMix) {
    noUiSlider.create(tooltipSliderMix, {
        start: [15, 34],
        step: 1,
        tooltips: [true, true],
        connect: true,
        range: {
            'min': 0,
            'max': 50
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });    

}