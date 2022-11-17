FROM mcr.microsoft.com/playwright:v1.27.1
LABEL maintainer="team@artillery.io"

RUN npm install -g artillery artillery-engine-playwright 

ENTRYPOINT ["/usr/bin/artillery"]