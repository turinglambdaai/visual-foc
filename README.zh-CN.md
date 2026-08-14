# Visual FOC

BLDC / PMSM 电机 **FOC（磁场定向控制）** 的交互式学习平台。通过实时动画理解 Clarke / Park 坐标变换，并调参一个真实的 PMSM 物理仿真，直观看到 PI 增益、负载扭矩和磁通如何影响电机响应。

![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) [![License](https://img.shields.io/badge/license-Apache--2.0-blue)](LICENSE)

[English](README.md) · **中文**

🌐 **在线访问：** <https://foc.jrtx.site>

## 功能特性

- **基础概念** — FOC 是什么、BLDC 与 PMSM 的区别、完整控制框图、以及为什么必须有位置传感器
- **原理动图** — 一幅动图看懂 FOC：7 步引导式动画从三相电、旋转磁场、转子跟随、转矩角 γ 一路讲到 Clarke / Park 变换与编码器，三个联动画布（三相电流 / 电机剖面 / 转子视角 dq+转矩）由同一状态驱动；讲完可切换「自由探索」拖动 γ 与转速
- **交互仿真** — 真实的 PMSM 物理引擎（Clarke → Park → PI → 反 Park → SVPWM → 电气与机械方程），基于 `requestAnimationFrame` 运行，配电机实时可视化和滚动波形（转速、Iq、Id）
- **调参实战** — 预置 PI 调参场景（理想参数、Kp 过大振荡、Ki 过大超调、带载启动、抗扰动），演示典型现象
- **知识测验** — 即时反馈的选择题，检验你的理解程度

## 技术栈

- 纯 HTML / CSS / JavaScript — 零外部依赖
- 真实 PMSM 数学（Clarke、Park、转矩与机械微分方程、电流环 + 速度环双闭环；测速含低通滤波，电压限幅可观测）
- 响应式设计，支持深色模式
- 作为静态站点部署在 GitHub Pages

## 快速开始

### 1. 克隆

```bash
git clone https://github.com/turinglambdaai/visual-foc.git
cd visual-foc
```

### 2. 安装并运行

```bash
npm install
npm start          # 启动带热重载的开发服务器
```

或使用 Python 内置的 HTTP 服务器：

```bash
python -m http.server 8000 -d src
```

## 构建部署

```bash
npm run build      # 将 src/ 拷贝到 docs/，供 GitHub Pages 使用
```

## 项目结构

```
src/
├── index.html              # 单页应用（内联 CSS + JS）
└── CNAME                   # foc.jrtx.site
```

## 许可证

基于 [Apache License 2.0](LICENSE) 授权。
