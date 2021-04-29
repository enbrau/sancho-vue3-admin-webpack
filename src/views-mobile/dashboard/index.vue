<template>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
  >
    <template #left>
      <span style="">XX</span>
      <span>晴 15</span>
    </template>
    <template #action />
  </van-search>
  <van-row
    type="flex"
    justify="center"
  >
    <van-col span="24">
      <van-grid :column-num="5">
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="文字"
        />
        <van-grid-item
          icon="photo-o"
          text="全部"
        />
      </van-grid>
    </van-col>
  </van-row>
  <van-tabbar v-model="active" fixed route>
    <van-tabbar-item icon="home-o" to="/dashboard">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
