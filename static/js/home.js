class Stage {
    constructor() {
      this.renderParam = {
        width: window.innerWidth,
        height: window.innerHeight
      };
  
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.geometry = null;
      this.material = null;
      this.mesh = null;
  
      this.isInitialized = false;
    }
  
    init() {
      this._setScene();
      this._setRender();
      this._setCamera();
      this._setFog();
  
      this.isInitialized = true;
    }
  
    _setScene() {
      this.scene = new THREE.Scene();
    }
  
    _setRender() {
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("webgl-canvas"),
        alpha: true
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.renderParam.width, this.renderParam.height);
    }
  
    _setCamera() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      if (!this.isInitialized) {
        this.camera = new THREE.PerspectiveCamera(
          70,
          this.renderParam.width / this.renderParam.height
        );
      }
  
      this.camera.aspect = windowWidth / windowHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(windowWidth, windowHeight);
    }
    
    _setFog() {
      this.scene.fog = new THREE.Fog(0x000000, 50, 2000);
    }
  
    _render() {
      let rot = 0;
      rot += 0.1;
      const radian = (rot * Math.PI) / 180;
      this.camera.position.x = 1000 * Math.sin(radian);
      this.camera.position.z = 1000 * Math.cos(radian);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.renderer.render(this.scene, this.camera);
    }
  
    onResize() {
      this._setCamera();
    }
  
    onRaf() {
      this._render();
    }
  }
  
  class Mesh {
    constructor(stage) {
      this.stage = stage;
  
      this.mesh = null;
    }
  
    init() {
      this._setMesh();
    }
  
    _setMesh() {
      const geometry = new THREE.Geometry();
      for (let i = 0; i < 10000; i++) {
        const star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(2000);
        star.y = THREE.Math.randFloatSpread(2000);
        star.z = THREE.Math.randFloatSpread(2000);
  
        geometry.vertices.push(star);
      }
      const material = new THREE.PointsMaterial({
        color: 0xffffff
      });
  
      this.mesh = new THREE.Points(geometry, material);
  
      this.stage.scene.add(this.mesh);
    }
  
    _render() {
      this.mesh.rotation.y += 0.005;
    }
  
    onRaf() {
      this._render();
    }
  }
  
let showbg = () => {
    const stage = new Stage();

    stage.init();

    const mesh = new Mesh(stage);

    mesh.init();

    window.addEventListener("resize", () => {
        stage.onResize();
    });

    const _raf = () => {
        window.requestAnimationFrame(() => {
        stage.onRaf();
        mesh.onRaf();

        _raf();
        });
    };

    _raf();
} 

window.addEventListener('load', showbg, false);
  