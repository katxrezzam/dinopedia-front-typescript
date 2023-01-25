import {RefObject, useState} from "react";
import {Color, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const useScene = () => {

  let currentMount : HTMLElement
  const [scene, setScene] = useState(new Scene())
  const camera : PerspectiveCamera = new PerspectiveCamera( 25,  100/100, 0.1, 1000)
  const renderer : WebGLRenderer = new WebGLRenderer()
  const controls : OrbitControls = new OrbitControls(camera, renderer.domElement)
  //
  camera.position.z = 5
  scene.add(camera)
  //
  const addElement = (element : any) => {
    scene.add(element)
  }
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
  const mount = (mountRef : RefObject<any>) => {
    currentMount = mountRef.current
    resize()
    currentMount.appendChild(renderer.domElement)
  }
  const resize = () => {
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    camera.aspect = currentMount.clientWidth / currentMount.clientHeight
    camera.updateProjectionMatrix()
  }
  const dismount = () => {
    renderer && renderer.renderLists.dispose()
    currentMount.removeChild(renderer.domElement)
  }

  return{
    addElement,
    mount,
    dismount
  }
}
export default  useScene