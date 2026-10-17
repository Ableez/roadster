# Forest assets

All assets below are by Poly Haven and released under CC0: https://polyhaven.com/license.

- Pine Sapling Small: https://polyhaven.com/a/pine_sapling_small. Source glTF binary MD5: `76dd1802d8de128c812f2e124a258b35`. Source scene variant `pine_sapling_small_b` retained. glTF Transform CLI 4.5.1 `optimize --simplify-ratio 0.08 --simplify-error 0.01 --texture-size 512 --compress meshopt` produced pine.glb (9,618 triangles). Runtime normalisation expands quantized position/normal attributes to float before applying the glTF node transforms.
- Rock Moss Set 01: https://polyhaven.com/a/rock_moss_set_01. Source glTF binary MD5: `207a51c9f56d34732e9814bbf9cc07b1`. Scene node `rock_moss_set_01_rock03` retained. Same pipeline with `--simplify-ratio 0.2` produced rocks.glb (1,000 triangles).
- Forest Ground 04: https://polyhaven.com/a/forest_ground_04. 1k diffuse JPEG stored as forest-ground.jpg. Source MD5: `6ad9df4d731a238299806f739a26af83`.

Original glTF metadata and download manifests: https://api.polyhaven.com/files/pine_sapling_small and https://api.polyhaven.com/files/rock_moss_set_01. Source archive assets are not shipped; optimised local GLBs contain the required textures. Original high resolution downloads were checksum-verified before optimisation.
