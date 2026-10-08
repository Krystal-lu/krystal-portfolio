// Perspective UI layers preserve the supplied kitchen renders underneath.
(function(){
function solve(a){const n=8;for(let i=0;i<n;i++){let k=i;for(let j=i+1;j<n;j++)if(Math.abs(a[j][i])>Math.abs(a[k][i]))k=j;[a[i],a[k]]=[a[k],a[i]];const d=a[i][i];for(let c=i;c<=n;c++)a[i][c]/=d;for(let r=0;r<n;r++)if(r!==i){const f=a[r][i];for(let c=i;c<=n;c++)a[r][c]-=f*a[i][c];}}return a.map(r=>r[n]);}
function place(scene){const ui=scene.querySelector('.screen-ui');if(!ui)return;const q=JSON.parse(scene.dataset.quad),w=scene.clientWidth,h=scene.clientHeight,src=[[0,0],[1194,0],[1194,834],[0,834]],a=[];q.forEach(([qx,qy],i)=>{const[x,y]=src[i],u=qx*w/2048,v=qy*h/1025;a.push([x,y,1,0,0,0,-u*x,-u*y,u],[0,0,0,x,y,1,-v*x,-v*y,v]);});const m=solve(a);ui.style.transform=`matrix3d(${m[0]},${m[3]},0,${m[6]},${m[1]},${m[4]},0,${m[7]},0,0,1,0,${m[2]},${m[5]},0,1)`;}
document.querySelectorAll('.kitchen-scene').forEach(scene=>{new ResizeObserver(()=>place(scene)).observe(scene);place(scene);});
})();
