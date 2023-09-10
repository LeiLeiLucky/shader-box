varying vec2 vUv;
uniform float uTime;

void main(){
    vec4 modelPosition =  modelMatrix * vec4(position,1.0);
    // modelPosition.z  += sin(modelPosition.x * 10.0) * 0.1;
    // modelPosition.z  += cos(modelPosition.y * 10.0) * 0.1;
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vUv = uv;
}