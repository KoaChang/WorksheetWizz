import os
from pdf2image import convert_from_path
import shutil

dirs = os.listdir('./src')
for dir in dirs:
    if dir != ".DS_Store" and dir != '.idea':
        for file in os.listdir(f'./src/{dir}'):
            if 'pdf' in file:
                filename = file.split('.')[0]
                preview = convert_from_path(f'./src/{dir}/{file}',last_page=1)[0]
                if os.path.exists(f'./src/{dir}/Previews'):
                    shutil.rmtree(f'./src/{dir}/Previews')
                if os.path.exists(f'./src/{dir}/Preview'):
                    preview.save(f'./src/{dir}/Preview/{filename}.jpg','JPEG')
                else:
                    os.mkdir(f'./src/{dir}/Preview')
                    preview.save(f'./src/{dir}/Preview/{filename}.jpg', 'JPEG')


