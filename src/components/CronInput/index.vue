<template>
  <div class="cron-input">
    <el-row>
      <el-col :span="16">
        <el-tabs
          v-model="active_tab"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="秒"
            name="second"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_second_type"
                  label="every"
                  @change="updateSecond"
                >
                  每秒
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_second_type"
                  label="range"
                  @change="updateSecond"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_second_values_range_start"
                  size="mini"
                  :disabled="form_second_type !== 'range'"
                  :min="0"
                  :max="59"
                  @change="updateSecond"
                />
                <span>秒至</span>
                <el-input-number
                  v-model="form_second_values_range_end"
                  size="mini"
                  :disabled="form_second_type !== 'range'"
                  :min="0"
                  :max="59"
                  @change="updateSecond"
                />
                <span>秒</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_second_type"
                  label="loop"
                  @change="updateSecond"
                >
                  循环
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_second_values_loop_start"
                  size="mini"
                  :disabled="true"
                  :min="0"
                  :max="59"
                  @change="updateSecond"
                />
                <span>秒开始，间隔</span>
                <el-input-number
                  v-model="form_second_values_loop_end"
                  size="mini"
                  :disabled="form_second_type !== 'loop'"
                  :min="0"
                  :max="59"
                  @change="updateSecond"
                />
                <span>秒</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_second_type"
                  label="pick"
                  @change="updateSecond"
                >
                  指定
                </el-radio>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group
                  v-model="form_second_values_pick"
                  @change="updateSecond"
                >
                  <el-checkbox
                    v-for="val in options_second_pick"
                    :key="val"
                    :label="val"
                    :disabled="form_second_type !== 'pick'"
                  >
                    {{ val &lt; 10 ? val + '&nbsp;&nbsp;' : val }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane
            label="分"
            name="minute"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_minute_type"
                  label="every"
                  @change="updateMinute"
                >
                  每分
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_minute_type"
                  label="range"
                  @change="updateMinute"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_minute_values_range_start"
                  size="mini"
                  :disabled="form_minute_type !== 'range'"
                  :min="0"
                  :max="60"
                  @change="updateMinute"
                />
                <span>分至</span>
                <el-input-number
                  v-model="form_minute_values_range_end"
                  size="mini"
                  :disabled="form_minute_type !== 'range'"
                  :min="0"
                  :max="60"
                  @change="updateMinute"
                />
                <span>分</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_minute_type"
                  label="loop"
                  @change="updateMinute"
                >
                  循环
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_minute_values_loop_start"
                  size="mini"
                  :disabled="true"
                  :min="0"
                  :max="59"
                  @change="updateMinute"
                />
                <span>分开始，间隔</span>
                <el-input-number
                  v-model="form_minute_values_loop_end"
                  size="mini"
                  :disabled="form_minute_type !== 'loop'"
                  :min="0"
                  :max="59"
                  @change="updateMinute"
                />
                <span>分</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_minute_type"
                  label="pick"
                  @change="updateMinute"
                >
                  指定
                </el-radio>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group
                  v-model="form_minute_values_pick"
                  @change="updateMinute"
                >
                  <el-checkbox
                    v-for="val in options_minute_pick"
                    :key="val"
                    :label="val"
                    :disabled="form_minute_type !== 'pick'"
                  >
                    {{ val &lt; 10 ? val + '&nbsp;&nbsp;' : val }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane
            label="时"
            name="hour"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_hour_type"
                  label="every"
                  @change="updateHour"
                >
                  每时
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_hour_type"
                  label="range"
                  @change="updateHour"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_hour_values_range_start"
                  size="mini"
                  :disabled="form_hour_type !== 'range'"
                  :min="0"
                  :max="23"
                  @change="updateHour"
                />
                <span>时至</span>
                <el-input-number
                  v-model="form_hour_values_range_end"
                  size="mini"
                  :disabled="form_hour_type !== 'range'"
                  :min="0"
                  :max="23"
                  @change="updateHour"
                />
                <span>时</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_hour_type"
                  label="loop"
                  @change="updateHour"
                >
                  循环
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_hour_values_loop_start"
                  size="mini"
                  :disabled="true"
                  :min="0"
                  :max="23"
                  @change="updateHour"
                />
                <span>时开始，间隔</span>
                <el-input-number
                  v-model="form_hour_values_loop_end"
                  size="mini"
                  :disabled="form_hour_type !== 'loop'"
                  :min="0"
                  :max="23"
                  @change="updateHour"
                />
                <span>时</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_hour_type"
                  label="pick"
                  @change="updateHour"
                >
                  指定
                </el-radio>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group
                  v-model="form_hour_values_pick"
                  @change="updateHour"
                >
                  <el-checkbox
                    v-for="val in options_hour_pick"
                    :key="val"
                    :label="val"
                    :disabled="form_hour_type !== 'pick'"
                  >
                    {{ val &lt; 10 ? val + '&nbsp;&nbsp;' : val }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane
            label="日"
            name="day"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_day_type"
                  label="none"
                  @change="updateDay"
                >
                  不设置
                </el-radio>
              </el-col>
              <el-col :span="20">
                日与周只能设置一项
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_day_type"
                  label="every"
                  @change="updateDay"
                >
                  每日
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_day_type"
                  label="range"
                  @change="updateDay"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_day_values_range_start"
                  size="mini"
                  :disabled="form_day_type !== 'range'"
                  :min="1"
                  :max="12"
                  @change="updateDay"
                />
                <span>日至</span>
                <el-input-number
                  v-model="form_day_values_range_end"
                  size="mini"
                  :disabled="form_day_type !== 'range'"
                  :min="1"
                  :max="12"
                  @change="updateDay"
                />
                <span>日</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_day_type"
                  label="loop"
                  @change="updateDay"
                >
                  循环
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_day_values_loop_start"
                  size="mini"
                  :disabled="true"
                  :min="1"
                  :max="12"
                  @change="updateDay"
                />
                <span>日开始，间隔</span>
                <el-input-number
                  v-model="form_day_values_loop_end"
                  size="mini"
                  :disabled="form_day_type !== 'loop'"
                  :min="1"
                  :max="12"
                  @change="updateDay"
                />
                <span>日</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_day_type"
                  label="last"
                  @change="updateDay"
                >
                  最后一日
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_day_type"
                  label="pick"
                  @change="updateDay"
                >
                  指定
                </el-radio>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group
                  v-model="form_day_values_pick"
                  @change="updateDay"
                >
                  <el-checkbox
                    v-for="val in options_day_pick"
                    :key="val"
                    :label="val"
                    :disabled="form_day_type !== 'pick'"
                  >
                    {{ val &lt; 10 ? val + '&nbsp;&nbsp;' : val }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane
            label="月"
            name="month"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_month_type"
                  label="every"
                  @change="updateMonth"
                >
                  每月
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_month_type"
                  label="range"
                  @change="updateMonth"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_month_values_range_start"
                  size="mini"
                  :disabled="form_month_type !== 'range'"
                  :min="1"
                  :max="12"
                  @change="updateMonth"
                />
                <span>月至</span>
                <el-input-number
                  v-model="form_month_values_range_end"
                  size="mini"
                  :disabled="form_month_type !== 'range'"
                  :min="1"
                  :max="12"
                  @change="updateMonth"
                />
                <span>月</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_month_type"
                  label="loop"
                  @change="updateMonth"
                >
                  循环
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_month_values_loop_start"
                  size="mini"
                  :disabled="true"
                  :min="1"
                  :max="12"
                  @change="updateMonth"
                />
                <span>月开始，间隔</span>
                <el-input-number
                  v-model="form_month_values_loop_end"
                  size="mini"
                  :disabled="form_month_type !== 'loop'"
                  :min="1"
                  :max="12"
                  @change="updateMonth"
                />
                <span>月</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_month_type"
                  label="pick"
                  @change="updateMonth"
                >
                  指定
                </el-radio>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group
                  v-model="form_month_values_pick"
                  @change="updateMonth"
                >
                  <el-checkbox
                    v-for="val in options_month_pick"
                    :key="val"
                    :label="val"
                    :disabled="form_month_type !== 'pick'"
                  >
                    {{ val &lt; 10 ? val + '&nbsp;&nbsp;' : val }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane
            label="周"
            name="week"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_week_type"
                  label="none"
                  @change="updateWeek"
                >
                  不设置
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_week_type"
                  label="every"
                  @change="updateWeek"
                >
                  每周
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_week_type"
                  label="range"
                  @change="updateWeek"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-select
                  v-model="form_week_values_range_start"
                  size="mini"
                  :disabled="form_week_type !== 'range'"
                  @change="updateWeek"
                >
                  <el-option
                    v-for="item in options_week"
                    :key="item.key"
                    :value="item.key"
                    :label="item.val"
                  />
                </el-select>
                <span>周至</span>
                <el-select
                  v-model="form_week_values_range_end"
                  size="mini"
                  :disabled="form_week_type !== 'range'"
                  @change="updateWeek"
                >
                  <el-option
                    v-for="item in options_week"
                    :key="item.key"
                    :value="item.key"
                    :label="item.val"
                  />
                </el-select>
                <span>周</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_week_type"
                  label="pick"
                  @change="updateWeek"
                >
                  指定
                </el-radio>
              </el-col>
              <el-col :span="20">
                <el-checkbox-group
                  v-model="form_week_values_pick"
                  @change="updateWeek"
                >
                  <el-checkbox
                    v-for="item in options_week"
                    :key="item.key"
                    :label="item.key"
                    :disabled="form_week_type !== 'pick'"
                  >
                    {{ item.val }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane
            v-if="mode !== 'simple'"
            label="年"
            name="year"
          >
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_year_type"
                  label="every"
                  @change="updateYear"
                >
                  每年
                </el-radio>
              </el-col>
              <el-col :span="20" />
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_year_type"
                  label="range"
                  @change="updateDay"
                >
                  区间
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_year_values_range_start"
                  size="mini"
                  :disabled="form_year_type !== 'range'"
                  :min="current_year"
                  @change="updateYear"
                />
                <span>年至</span>
                <el-input-number
                  v-model="form_year_values_range_end"
                  size="mini"
                  :disabled="form_year_type !== 'range'"
                  :min="form_year_values_range_start"
                  @change="updateYear"
                />
                <span>年</span>
              </el-col>
            </el-row>
            <el-row class="cron-form-area">
              <el-col :span="4">
                <el-radio
                  v-model="form_year_type"
                  label="loop"
                  @change="updateDay"
                >
                  循环
                </el-radio>
              </el-col>
              <el-col :span="20">
                <span>从</span>
                <el-input-number
                  v-model="form_year_values_loop_start"
                  size="mini"
                  :disabled="true"
                  :min="current_year"
                  @change="updateYear"
                />
                <span>年开始，间隔</span>
                <el-input-number
                  v-model="form_year_values_loop_end"
                  size="mini"
                  :disabled="form_year_type !== 'loop'"
                  :min="0"
                  @change="updateYear"
                />
                <span>年</span>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col
        :span="8"
        style="border-left: 2px solid #1890ff"
      >
        <el-form
          ref="form"
          label-width="90px"
        >
          <el-form-item label="秒">
            <span>{{ result_second }}</span>
          </el-form-item>
          <el-form-item label="分">
            <span>{{ result_minute }}</span>
          </el-form-item>
          <el-form-item label="时">
            <span>{{ result_hour }}</span>
          </el-form-item>
          <el-form-item label="日">
            <span>{{ result_day }}</span>
          </el-form-item>
          <el-form-item label="月">
            <span>{{ result_month }}</span>
          </el-form-item>
          <el-form-item label="周">
            <span>{{ result_week }}</span>
          </el-form-item>
          <el-form-item
            v-if="mode !== 'simple'"
            label="年"
          >
            <span>{{ result_year }}</span>
          </el-form-item>
          <el-form-item label="表达式">
            <span>{{ cron1 }}</span>
            <el-button
              v-clipboard:copy="cron1"
              v-clipboard:success="clipboardSuccess"
              class="copy-link"
              type="text"
              size="mini"
            >
              <svg-icon icon-class="clipboard" />
            </el-button>
          </el-form-item>
          <el-form-item
            v-if="mode !== 'simple'"
            label="表达式"
          >
            <span>{{ cron2 }}</span>
            <el-button
              v-clipboard:copy="cron2"
              v-clipboard:success="clipboardSuccess"
              class="copy-link"
              type="text"
              size="mini"
            >
              <svg-icon icon-class="clipboard" />
            </el-button>
          </el-form-item>
          <el-form-item
            v-if="mode !== 'simple'"
            label="表达式"
          >
            <span>{{ cron3 }}</span>
            <el-button
              v-clipboard:copy="cron3"
              v-clipboard:success="clipboardSuccess"
              class="copy-link"
              type="text"
              size="mini"
            >
              <svg-icon icon-class="clipboard" />
            </el-button>
          </el-form-item>
          <el-form-item label="当前时间">
            <el-date-picker
              v-model="result_current_time"
              style="width: 95%"
              type="datetime"
              placeholder="选择日期时间"
            />
          </el-form-item>
          <el-form-item label="下次执行">
            <span style="white-space: pre-wrap;">{{ nextTimes }}</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import parser from 'cron-parser'
import clipboard from '@/directive/clipboard'

export default {
  name: 'CronInput',
  directives: { clipboard },
  props: {
    value: {
      type: String,
      default: '* * * * * ?'
    },
    mode: {
      type: String,
      default: 'simple'
    }
  },
  data() {
    return {
      current_year: 2020,
      cron_arr: [],
      active_tab: 'second',
      options_second_pick: [],
      options_minute_pick: [],
      options_hour_pick: [],
      options_day_pick: [],
      options_month_pick: [],
      options_week: [],
      form_second_type: 'every',
      form_second_values_range_start: 0,
      form_second_values_range_end: 60,
      form_second_values_loop_start: 0,
      form_second_values_loop_end: 60,
      form_second_values_pick: [],
      form_minute_type: 'every',
      form_minute_values_range_start: 0,
      form_minute_values_range_end: 60,
      form_minute_values_loop_start: 0,
      form_minute_values_loop_end: 60,
      form_minute_values_pick: [],
      form_hour_type: 'every',
      form_hour_values_range_start: 0,
      form_hour_values_range_end: 60,
      form_hour_values_loop_start: 0,
      form_hour_values_loop_end: 60,
      form_hour_values_pick: [],
      form_day_type: 'every',
      form_day_values_range_start: 0,
      form_day_values_range_end: 60,
      form_day_values_loop_start: 0,
      form_day_values_loop_end: 60,
      form_day_values_pick: [],
      form_month_type: 'every',
      form_month_values_range_start: 0,
      form_month_values_range_end: 60,
      form_month_values_loop_start: 0,
      form_month_values_loop_end: 60,
      form_month_values_pick: [],
      form_week_type: 'none',
      form_week_values_range_start: 0,
      form_week_values_range_end: 6,
      form_week_values_loop_start: 0,
      form_week_values_loop_end: 6,
      form_week_values_pick: [],
      form_year_type: 'every',
      form_year_values_range_start: 0,
      form_year_values_range_end: 6,
      form_year_values_loop_start: 0,
      form_year_values_loop_end: 6,
      result_second: '*',
      result_minute: '*',
      result_hour: '*',
      result_day: '*',
      result_week: '?',
      result_month: '*',
      result_year: '*',
      result_current_time: new Date(),
      result_next_times: ''
    }
  },
  computed: {
    cron1() {
      return this.getCron(1)
    },
    cron2() {
      return this.getCron(2)
    },
    cron3() {
      return this.getCron(3)
    },
    nextTimes() {
      try {
        const test_cron = this.getCron(1)
        const interval = parser.parseExpression(test_cron, { currentDate: this.result_current_time })
        let text = ''
        for (let i = 0; i < 5; i++) {
          text += this.$day(interval.next().getTime()).format('YYYY-MM-DD HH:mm:ss') + '\n'
        }
        return text
      } catch (e) {
        return e.message
      }
    }
  },
  created() {
    for (let i = 0; i < 60; i++) {
      this.options_second_pick.push(i)
      this.options_minute_pick.push(i)
    }
    for (let i = 0; i < 24; i++) {
      this.options_hour_pick.push(i)
    }
    for (let i = 1; i < 32; i++) {
      this.options_day_pick.push(i)
    }
    for (let i = 1; i < 13; i++) {
      this.options_month_pick.push(i)
    }
    this.options_week = [
      { key: 0, val: '周日' },
      { key: 1, val: '周一' },
      { key: 2, val: '周二' },
      { key: 3, val: '周三' },
      { key: 4, val: '周四' },
      { key: 5, val: '周五' },
      { key: 6, val: '周六' }
    ]
  },
  methods: {
    refresh() {},
    handleClick() {},
    updateSecond() {
      switch (this.form_second_type) {
        case 'every':
          this.result_second = '*'
          break
        case 'range':
          this.result_second = this.form_second_values_range_start + '-' + this.form_second_values_range_end
          break
        case 'loop':
          this.result_second = '*/' + this.form_second_values_loop_end
          break
        case 'pick':
          this.result_second = this.form_second_values_pick.length > 0 ? this.form_second_values_pick.join(',') : '*'
      }
    },
    updateMinute() {
      switch (this.form_minute_type) {
        case 'every':
          this.result_minute = '*'
          break
        case 'range':
          this.result_minute = this.form_minute_values_range_start + '-' + this.form_minute_values_range_end
          break
        case 'loop':
          this.result_minute = '*/' + this.form_minute_values_loop_end
          break
        case 'pick':
          this.result_minute = this.form_minute_values_pick.length > 0 ? this.form_minute_values_pick.join(',') : '*'
      }
    },
    updateHour() {
      switch (this.form_hour_type) {
        case 'every':
          this.result_hour = '*'
          break
        case 'range':
          this.result_hour = this.form_hour_values_range_start + '-' + this.form_hour_values_range_end
          break
        case 'loop':
          this.result_hour = '*/' + this.form_hour_values_loop_end
          break
        case 'pick':
          this.result_hour = this.form_hour_values_pick.length > 0 ? this.form_hour_values_pick.join(',') : '*'
      }
    },
    updateDay() {
      switch (this.form_day_type) {
        case 'none':
          this.result_day = '?'
          break
        case 'every':
          this.result_day = '*'
          break
        case 'range':
          this.result_day = this.form_day_values_range_start + '-' + this.form_day_values_range_end
          break
        case 'loop':
          this.result_day = '*/' + this.form_day_values_loop_end
          break
        case 'last':
          this.result_day = 'L'
          break
        case 'pick':
          this.result_day = this.form_day_values_pick.length > 0 ? this.form_day_values_pick.join(',') : '*'
      }
    },
    updateMonth() {
      switch (this.form_month_type) {
        case 'every':
          this.result_month = '*'
          break
        case 'range':
          this.result_month = this.form_month_values_range_start + '-' + this.form_month_values_range_end
          break
        case 'loop':
          this.result_month = '*/' + this.form_month_values_loop_end
          break
        case 'pick':
          this.result_month = this.form_month_values_pick.length > 0 ? this.form_month_values_pick.join(',') : '*'
      }
    },
    updateWeek() {
      switch (this.form_week_type) {
        case 'none':
          this.result_week = '?'
          break
        case 'every':
          this.result_week = '*'
          break
        case 'range':
          this.result_week = this.form_week_values_range_start + '-' + this.form_week_values_range_end
          break
        case 'loop':
          this.result_week = '*/' + this.form_week_values_loop_end
          break
        case 'pick':
          this.result_week = this.form_week_values_pick.length > 0 ? this.form_week_values_pick.join(',') : '*'
      }
    },
    updateYear() {
      switch (this.form_year_type) {
        case 'every':
          this.result_year = '*'
          break
        case 'range':
          this.result_year = this.form_year_values_range_start + '-' + this.form_year_values_range_end
          break
        case 'loop':
          this.result_year = '*/' + this.form_year_values_loop_end
      }
    },
    getCron(cron_type) {
      switch (cron_type) {
        case 1:
          return `${this.result_second} ${this.result_minute} ${this.result_hour} ${this.result_day} ${this.result_month} ${this.result_week}`
        case 2:
          return `${this.result_second} ${this.result_minute} ${this.result_hour} ${this.result_day} ${this.result_month} ${this.result_week} ${this.result_year}`
        case 3:
          return `${this.result_minute} ${this.result_hour} ${this.result_day} ${this.result_month} ${this.result_week}`
      }
    },
    clipboardSuccess() {
      this.$message({
        message: 'Cron 表达式已经复制到剪贴板',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cron-input {
  width: auto;
  font-size: 14px;
  line-height: 28px;

  .cron-form-area {
    margin-bottom: 15px;
  }

  .el-form-item {
    margin-bottom: 0;
    padding: 5px 0;

    &:nth-child(even) {
      background-color: #dfe4ed;
    }
  }

  .copy-link {
    float: right;
    height: 36px;
    margin-right: 20px;
  }
}
</style>
