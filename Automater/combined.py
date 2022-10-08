import os
import shutil
from PIL import Image

dirs = os.listdir('./src')
for dir in dirs:
    if dir != '.DS_Store' and dir != '.idea':
        os.mkdir(f'./src/{dir}/Preview')
        folders = os.listdir(f'./src/{dir}')
        for folder in folders:
            if folder != '.DS_Store' and folder != '.idea' and folder != 'Preview':
                previews = os.listdir(f'./src/{dir}/{folder}/Preview')
                for preview in previews:
                    if preview != '.DS_Store' and preview != '.idea':
                        os.rename(f'./src/{dir}/{folder}/Preview/{preview}',f'./src/{dir}/Preview/{preview}')

