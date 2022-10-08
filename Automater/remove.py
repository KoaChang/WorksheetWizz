import os
from PIL import Image

dirs = os.listdir('./src')
for dir in dirs:
    if dir != '.DS_Store' and dir != '.idea':
        folders = os.listdir(f'./src/{dir}')
        for folder in folders:
            if folder != '.DS_Store' and folder != '.idea':
                previews = os.listdir(f'./src/{dir}/{folder}/Preview')
                pdfs = os.listdir(f'./src/{dir}/{folder}')
                for preview in previews:
                    if preview != '.DS_Store' and preview != '.idea':
                        if '+' in preview:
                            newpreview = preview.replace('+', ' ')
                            os.rename(f'./src/{dir}/{folder}/Preview/{preview}',f'./src/{dir}/{folder}/Preview/{newpreview}')
                        if '-' in preview:
                            newpreview = preview.replace('-', ' ')
                            os.rename(f'./src/{dir}/{folder}/Preview/{preview}',
                                          f'./src/{dir}/{folder}/Preview/{newpreview}')
                for pdf in pdfs:
                    if pdf != '.DS_Store' and pdf != '.idea':
                        if '+' in pdf:
                            newpdf = pdf.replace('+', ' ')
                            os.rename(f'./src/{dir}/{folder}/{pdf}',f'./src/{dir}/{folder}/{newpdf}')
                        if '-' in pdf:
                            newpdf = pdf.replace('-', ' ')
                            os.rename(f'./src/{dir}/{folder}/{pdf}',f'./src/{dir}/{folder}/{newpdf}')
