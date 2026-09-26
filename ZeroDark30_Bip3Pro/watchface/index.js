let bgWidget = null;
let timeWidget = null;
let dateWidget = null;
let weekWidget = null;
let batteryWidget = null;
let stepWidget = null;
let heartWidget = null;
let calWidget = null;
let ampmWidget = null;

WatchFace({
  init_view() {
    // 1. Background image (240x280)
    bgWidget = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: 'images/bg.png',
      show_level: hmUI.show_level.ONLY_NORMAL
    });

    // 2. Battery Percentage
    batteryWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 106,
      y: 16,
      w: 40,
      h: 20,
      color: 0xE4DFD5,
      text_size: 15,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      type: hmUI.data_type.BATTERY
    });

    // 3. Date (MM - DD)
    dateWidget = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      month_startX: 68,
      month_startY: 38,
      month_zero: 1,
      month_space: 1,
      month_en_array: [
        'images/date_0.png', 'images/date_1.png', 'images/date_2.png',
        'images/date_3.png', 'images/date_4.png', 'images/date_5.png',
        'images/date_6.png', 'images/date_7.png', 'images/date_8.png',
        'images/date_9.png'
      ],
      month_is_character: false,
      day_startX: 144,
      day_startY: 38,
      day_zero: 1,
      day_space: 1,
      day_en_array: [
        'images/date_0.png', 'images/date_1.png', 'images/date_2.png',
        'images/date_3.png', 'images/date_4.png', 'images/date_5.png',
        'images/date_6.png', 'images/date_7.png', 'images/date_8.png',
        'images/date_9.png'
      ]
    });

    // Date separator '-'
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 114,
      y: 38,
      src: 'images/date_dash.png'
    });

    // 4. Weekday row
    weekWidget = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
      x: 0,
      y: 60,
      week_en: [
        'images/week_0.png', 'images/week_1.png', 'images/week_2.png',
        'images/week_3.png', 'images/week_4.png', 'images/week_5.png',
        'images/week_6.png'
      ]
    });

    // 5. 7-Segment Digital Clock Time (Hour & Minute)
    timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_zero: 1,
      hour_startX: 26,
      hour_startY: 98,
      hour_space: 14,
      hour_array: [
        'images/time_0.png', 'images/time_1.png', 'images/time_2.png',
        'images/time_3.png', 'images/time_4.png', 'images/time_5.png',
        'images/time_6.png', 'images/time_7.png', 'images/time_8.png',
        'images/time_9.png'
      ],
      minute_zero: 1,
      minute_startX: 125,
      minute_startY: 98,
      minute_space: 14,
      minute_array: [
        'images/time_0.png', 'images/time_1.png', 'images/time_2.png',
        'images/time_3.png', 'images/time_4.png', 'images/time_5.png',
        'images/time_6.png', 'images/time_7.png', 'images/time_8.png',
        'images/time_9.png'
      ]
    });

    // AM/PM Indicator
    ampmWidget = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 201,
      y: 124,
      type: hmUI.status_type.AM_PM,
      src_am: 'images/time_am.png',
      src_pm: 'images/time_pm.png'
    });

    // 6. Step Count
    stepWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 15,
      y: 194,
      w: 100,
      h: 24,
      color: 0xE4DFD5,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      type: hmUI.data_type.STEP
    });

    // 7. Heart Rate
    heartWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 125,
      y: 194,
      w: 100,
      h: 24,
      color: 0xE4DFD5,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      type: hmUI.data_type.HEART
    });

    // 8. Calories (kcal)
    calWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 70,
      y: 244,
      w: 100,
      h: 24,
      color: 0xE4DFD5,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      type: hmUI.data_type.CALORIE
    });
  },

  onInit() {
    this.init_view();
  },

  onDestroy() {}
});