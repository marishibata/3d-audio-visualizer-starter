# 3D Audio / Music Visualizer - Starter Boilerplate Code

#### Stripped back version of demos provided in the `react-three-fiber` docs (where audio is usually looped). Created for first-timers to study and understand how the core functionality is generated (i.e. with playback control one would expect from a typical music player).

<img width="1224" alt="mari-shibata-3d-javascript-audio-visualzer-starter" src="https://user-images.githubusercontent.com/76498339/210119966-0a4d8dc4-62a8-46ac-8ada-120f4ee07401.png">

N.B. Current / initial commit a desktop version, mobile responsiveness will be added next - as well as some other core improvements as part of this starter code. A more custom version will be built for [this work-in-progress interactive documentary.](https://www.github.com/marishibata/digital-prejudice)

# Current Features

- Basic `react-three-fiber` (THREE.js) canvas setup where a field of 3D geometries animate to a playlist of mp3s

- Audio playback states - including play / pause, previous and next functionalities - managed with `zustand`

- `TypeScript` support

- `.mp3` audio supplied are old music produced by me 😬 new music will be added as and when

# A work-in-progress - Next Steps

- Mobile responsiveness

- Add CSS-in-JS using `styled-components`

- Styling updates for 3D geometry visualizer with basic `WebGL` shader setup

- Toggle to visualizer featuring 3D models

# Getting Started

These instructions will help you setup a local development instance of the app.

### Get the repo

```
git clone https://github.com/marishibata/3d-audio-visualizer-starter.git
```

### Navigate to the folder

```
cd 3d-audio-visualizer-starter
```

### Install the dependencies

```
yarn install
```

### Run client to start app

```
yarn dev
```
