# 3D Audio / Music Visualizer - Starter Boilerplate Code

### Stripped back version of demos provided in the `react-three-fiber` docs (where audio is usually looped!) and was created for first-timers to study and understand how the core functionality is generated (i.e. with playback control one would expect from a typical music player).

N.B. Current / initial commit a desktop version, mobile responsiveness will be added next - as well as some other core improvements as part of this starter code. Eventually, a more custom version will be built for [this work-in-progress interactive documentary] (https://github.com/marishibata/digital-prejudice).

# Current features

- Basic `React Three Fiber` (THREE.js) canvas setup where a field of 3D geometries animate to a playlist of mp3s (old music produced by me)

- Audio playback states - including play / pause, previous and next functionalities - managed with `Zustand`

- `TypeScript` support

# A work in progress - next steps

- mobile responsiveness

- add CSS-in-JS using `styled-components`

- styling updates for 3D geometry visualizer with basic `WebGL` shader setup

- toggle to visulizer featuring 3D models

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
