# React Three Fiber Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

Create Three.js projects using React components and props!

## 🚀 How to use

> `npx create-react-native-app my-app -t with-react-three-fiber`

- Run `yarn` or `npm install`
- Run `yarn start` or `npm run start` to try it out.

## 📝 Notes

- [react-three-fiber docs](https://github.com/react-spring/react-three-fiber)
- [three.js docs](https://threejs.org/docs/)
- [expo-three docs](https://github.com/expo/expo-three)



## Yarn directions
To run your project, navigate to the directory and run one of the following yarn commands.

- cd span
- yarn android
- yarn ios
- yarn web



# Important pointer stuff
<mesh
  onClick={(e) => console.log("click")}
  onWheel={(e) => console.log("wheel spins")}
  onPointerUp={(e) => console.log("up")}
  onPointerDown={(e) => console.log("down")}
  onPointerOver={(e) => console.log("over")}
  onPointerOut={(e) => console.log("out")}
  onPointerEnter={(e) => console.log("enter")}
  onPointerLeave={(e) => console.log("leave")}
  onPointerMove={(e) => console.log("move")}
  onUpdate={(self) => console.log("props have been updated")}
/>