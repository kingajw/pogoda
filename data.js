function data() {
  var sin = [],
      cos = [],
      d = new Date(),
      t = d.getTime();

for (let i = 0; i < 100; i++) {
sin.push({x: i*60000+t, y: Math.sin(i/10)});
cos.push({x: i*60000+t, y: .5 * Math.cos(i/10)});
}

return [
{
values: sin,
key: 'Temperatura',
color: '#ff7f0e'
},
{
values: cos,
key: 'Wilgotność',
color: '#2ca02c'
}
];
}
