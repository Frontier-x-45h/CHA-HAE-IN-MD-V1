const { fetchJson } = require('../lib/functions'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  { cmd, commands } = require('../command')

cmd(
  {
    pattern: 'xnxxdown',
    alias: ['dlxnxx', 'xnxxdl'],
    react: '\uD83E\uDEE3',
    desc: 'Download xnxx videos',
    category: 'nsfw',
    use: '.xnxx <xnxx link>',
    filename: __filename,
  },
  async (
    _0x3fc871,
    _0x3d925e,
    _0x17916a,
    {
      from: _0x57ce05,
      l: _0xa610c0,
      quoted: _0x3ba617,
      body: _0x554283,
      isCmd: _0x3469a3,
      command: _0x94c3d2,
      args: _0x16e2a1,
      q: _0x1eede5,
      isGroup: _0x23f46e,
      sender: _0x312a3e,
      senderNumber: _0x4ce309,
      botNumber2: _0x3bb01c,
      botNumber: _0x3636ad,
      pushname: _0x267973,
      isMe: _0x1b9df7,
      isOwner: _0xe3d46e,
      groupMetadata: _0x5ced92,
      groupName: _0x2ef9fa,
      participants: _0xb8c9e5,
      groupAdmins: _0x45b015,
      isBotAdmins: _0x1d1da6,
      isAdmins: _0x40133b,
      reply: _0x251394,
    }
  ) => {
    try {
      if (!_0x1eede5) {
        return _0x251394('*Please give me url !!*')
      }
      let _0x32cdc8 = await xdl(_0x1eede5),
        _0x255422 = _0x32cdc8.result.title
      await _0x3fc871.sendMessage(
        _0x57ce05,
        {
          video: { url: _0x32cdc8.result.files.high },
          caption: _0x255422,
        },
        { quoted: _0x3d925e }
      )
    } catch (_0xf619b4) {
      _0x251394('*Error !!*')
      console.log(_0xf619b4)
    }
  }
)
cmd(
  {
    pattern: 'xvdown',
    alias: ['dlxv', 'xvdl'],
    react: '\uD83E\uDEE3',
    desc: 'Download xvideos videos',
    category: 'nsfw',
    use: '.xv <xvideos link>',
    filename: __filename,
  },
  async (
    _0x247db1,
    _0x119628,
    _0xcf4960,
    {
      from: _0x3b0c57,
      l: _0x1d5f2b,
      quoted: _0x4a0527,
      body: _0x39aff3,
      isCmd: _0x2fad82,
      command: _0x470e95,
      args: _0x2898f9,
      q: _0xa91317,
      isGroup: _0x220294,
      sender: _0x53faf9,
      senderNumber: _0xfda322,
      botNumber2: _0x33cdc3,
      botNumber: _0x3eab2d,
      pushname: _0x248e0b,
      isMe: _0x3fda84,
      isOwner: _0x2fc437,
      groupMetadata: _0x1e88b5,
      groupName: _0x3d278c,
      participants: _0x5a61ad,
      groupAdmins: _0x105288,
      isBotAdmins: _0x3a28bb,
      isAdmins: _0x4c7d0d,
      reply: _0x51e6c6,
    }
  ) => {
    try {
      if (!_0xa91317) {
        return _0x51e6c6('*Please give me url !!*')
      }
      let _0x5dfef2 = await fetchJson(
        'https://www.dark-yasiya-api.site/download/xvideo?url=' + _0xa91317
      )
      const _0x5a66af =
        '\n   \uD83D\uDD1E *XVIDEO DOWNLOADER* \uD83D\uDD1E\n\n     \n\u2022 *Title* - ' +
        _0x5dfef2.result.title +
        '\n\n\u2022 *Views* - ' +
        _0x5dfef2.result.views +
        '\n\n\u2022 *Like* - ' +
        _0x5dfef2.result.like +
        '\n\n\u2022 *Deslike* - ' +
        _0x5dfef2.result.deslike +
        '\n\n\u2022 *Size* - ' +
        _0x5dfef2.result.size
      await _0x247db1.sendMessage(
        _0x3b0c57,
        {
          video: { url: _0x5dfef2.result.dl_link },
          caption: _0x5a66af,
        },
        { quoted: _0x119628 }
      )
    } catch (_0x2c19b6) {
      _0x51e6c6('*Error !!*')
      console.log(_0x2c19b6)
    }
  }
)
const fs = require('fs'),
  path = require('path')
cmd(
  {
    pattern: 'baiscope',
    alias: ['movie2'],
    react: '\uD83D\uDCD1',
    category: 'movie',
    desc: 'baiscope.lk',
    filename: __filename,
  },
  async (
    _0xe3f231,
    _0x4bd58e,
    _0x189921,
    { from: _0x195bec, q: _0x464db7, isDev: _0x49b482, reply: _0x4ee609 }
  ) => {
    try {
      if (!_0x464db7) {
        return await _0x4ee609(
          '*Please provide a search query! (e.g., Avatar)*'
        )
      }
      const _0x25ae15 =
          'https://www.baiscope.lk/?s=' + encodeURIComponent(_0x464db7),
        _0x3ee23b = await axios.get(_0x25ae15),
        _0x50435e = cheerio.load(_0x3ee23b.data)
      let _0x4d43f1 = []
      _0x50435e('article.elementor-post').each((_0x2b6f1e, _0x36c616) => {
        const _0x4f2aba = _0x50435e(_0x36c616)
            .find('h5.elementor-post__title > a')
            .text()
            .trim(),
          _0x3e71ec = _0x50435e(_0x36c616)
            .find('h5.elementor-post__title > a')
            .attr('href'),
          _0x4106eb = _0x50435e(_0x36c616)
            .find('.elementor-post__thumbnail img')
            .attr('src')
        _0x4f2aba &&
          _0x3e71ec &&
          _0x4106eb &&
          _0x4d43f1.push({
            title: _0x4f2aba,
            episodeLink: _0x3e71ec,
            imgUrl: _0x4106eb,
          })
      })
      if (_0x4d43f1.length === 0) {
        return await _0x4ee609('No results found for: ' + _0x464db7)
      }
      let _0x14feea = '\uD83D\uDCFA Search Results for *' + _0x464db7 + ':*\n\n'
      _0x4d43f1.forEach((_0x352480, _0x5acfc4) => {
        _0x14feea +=
          '*' +
          (_0x5acfc4 + 1) +
          '.* ' +
          _0x352480.title +
          '\n\uD83D\uDD17 Link: ' +
          _0x352480.episodeLink +
          '\n\n'
      })
      const _0x37c506 = await _0xe3f231.sendMessage(
          _0x195bec,
          { text: _0x14feea },
          { quoted: _0x189921 }
        ),
        _0x4e140d = _0x37c506.key.id
      _0xe3f231.ev.on('messages.upsert', async (_0x29e3fd) => {
        const _0x28ef4d = _0x29e3fd.messages[0]
        if (!_0x28ef4d.message) {
          return
        }
        const _0x1f10f3 =
            _0x28ef4d.message.conversation ||
            _0x28ef4d.message.extendedTextMessage?.text,
          _0x29ef5e = _0x28ef4d.key.remoteJid,
          _0x49bbc0 =
            _0x28ef4d.message.extendedTextMessage &&
            _0x28ef4d.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x4e140d
        if (_0x49bbc0) {
          const _0x34c5d6 = parseInt(_0x1f10f3.trim())
          if (
            !isNaN(_0x34c5d6) &&
            _0x34c5d6 > 0 &&
            _0x34c5d6 <= _0x4d43f1.length
          ) {
            const _0x12f737 = _0x4d43f1[_0x34c5d6 - 1],
              _0x1cd6d7 = await axios.get(_0x12f737.episodeLink),
              _0x2d28d2 = cheerio.load(_0x1cd6d7.data),
              _0x16231a = _0x2d28d2('a.dlm-buttons-button').attr('href')
            if (_0x16231a) {
              await _0xe3f231.sendMessage(
                _0x29ef5e,
                {
                  image: { url: _0x12f737.imgUrl },
                  caption:
                    '\uD83C\uDFAC *' +
                    _0x12f737.title +
                    '*\n\uD83D\uDD17 Link: ' +
                    _0x12f737.episodeLink +
                    '\n\u2B07️ Download will follow.',
                },
                { quoted: _0x28ef4d }
              )
              const _0x32029c = path.join(__dirname, 'downloaded_episode.zip'),
                _0x29c8e0 = fs.createWriteStream(_0x32029c),
                _0x23fc82 = await axios({
                  url: _0x16231a,
                  method: 'GET',
                  responseType: 'stream',
                })
              _0x23fc82.data.pipe(_0x29c8e0)
              _0x29c8e0.on('finish', async () => {
                await _0xe3f231.sendMessage(
                  _0x29ef5e,
                  {
                    document: { url: _0x32029c },
                    mimetype: 'application/zip',
                    fileName: _0x12f737.title + '.zip',
                    caption: '*' + _0x12f737.title + '*\n\n> malvin xᴍᴅ \u273B',
                  },
                  { quoted: _0x28ef4d }
                )
                fs.unlinkSync(_0x32029c)
              })
              _0x29c8e0.on('error', (_0xf6647a) => {
                console.error('Error downloading ZIP file:', _0xf6647a)
                _0x4ee609('*Error downloading the episode ZIP file.*')
              })
            } else {
              await _0x4ee609(
                '*Download link not found for the selected episode.*'
              )
            }
          } else {
            await _0x4ee609(
              '*Invalid selection. Please choose a valid number.*'
            )
          }
        }
      })
    } catch (_0x59ac25) {
      console.error(_0x59ac25)
      await _0x4ee609('*An error occurred while scraping the data.*')
    }
  }
)
cmd(
  {
    pattern: 'ginisisila',
    react: '\uD83D\uDCD1',
    category: 'movie',
    desc: 'ginisisilacartoon.net',
    filename: __filename,
  },
  async (
    _0x5049fe,
    _0x194cab,
    _0x31c6bb,
    { from: _0x2287e7, q: _0x4564d6, isDev: _0x2a68be, reply: _0xc4807 }
  ) => {
    try {
      if (!_0x4564d6) {
        return await _0xc4807(
          '*Please provide a search query! (e.g., Garfield)*'
        )
      }
      const _0x2e5011 =
          'https://ginisisilacartoon.net/search.php?q=' +
          encodeURIComponent(_0x4564d6),
        _0x1a1ec0 = await axios.get(_0x2e5011),
        _0x4099bd = cheerio.load(_0x1a1ec0.data)
      let _0x572788 = []
      _0x4099bd('div.inner-video-cell').each((_0xaa6fae, _0x2e2bcc) => {
        const _0x4f6705 = _0x4099bd(_0x2e2bcc)
            .find('div.video-title > a')
            .attr('title'),
          _0x599247 = _0x4099bd(_0x2e2bcc)
            .find('div.posted-time')
            .text()
            .trim(),
          _0x25bca3 = _0x4099bd(_0x2e2bcc)
            .find('div.video-title > a')
            .attr('href'),
          _0x5d44de = _0x4099bd(_0x2e2bcc)
            .find('div.inner-video-thumb-wrapper img')
            .attr('src')
        _0x4f6705 &&
          _0x25bca3 &&
          _0x572788.push({
            title: _0x4f6705,
            postedTime: _0x599247,
            episodeLink: 'https://ginisisilacartoon.net/' + _0x25bca3,
            imageUrl: _0x5d44de,
          })
      })
      if (_0x572788.length === 0) {
        return await _0xc4807('No results found for: ' + _0x4564d6)
      }
      let _0x22c31b = '\uD83D\uDCFA Search Results for *' + _0x4564d6 + ':*\n\n'
      _0x572788.forEach((_0x16cf4a, _0x35b536) => {
        _0x22c31b +=
          '*' +
          (_0x35b536 + 1) +
          '.* ' +
          _0x16cf4a.title +
          '\n\uD83D\uDDD3️ Posted: ' +
          _0x16cf4a.postedTime +
          '\n\uD83D\uDD17 Link: ' +
          _0x16cf4a.episodeLink +
          '\n\n'
      })
      const _0x5a1342 = await _0x5049fe.sendMessage(
          _0x2287e7,
          { text: _0x22c31b },
          { quoted: _0x31c6bb }
        ),
        _0x27a596 = _0x5a1342.key.id
      _0x5049fe.ev.on('messages.upsert', async (_0x9a7b7a) => {
        const _0x171143 = _0x9a7b7a.messages[0]
        if (!_0x171143.message) {
          return
        }
        const _0x14f608 =
            _0x171143.message.conversation ||
            _0x171143.message.extendedTextMessage?.text,
          _0x4a17a3 = _0x171143.key.remoteJid,
          _0x14e10e =
            _0x171143.message.extendedTextMessage &&
            _0x171143.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x27a596
        if (_0x14e10e) {
          const _0x284411 = parseInt(_0x14f608.trim())
          if (
            !isNaN(_0x284411) &&
            _0x284411 > 0 &&
            _0x284411 <= _0x572788.length
          ) {
            const _0x1d0aed = _0x572788[_0x284411 - 1],
              _0x189e89 =
                '*\uD83E\uDE84 ɴᴀᴍᴇ:-* ' +
                _0x1d0aed.title +
                '\n\u23F3 *ᴅᴀᴛᴇ:-* ' +
                _0x1d0aed.postedTime +
                '\n\uD83D\uDCCE *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- ' +
                _0x1d0aed.episodeLink +
                '\n\n\u2618 *We are uploading the Movie/Episode you requested.*',
              _0x456cc9 = {
                image: { url: _0x1d0aed.imageUrl },
                caption: _0x189e89,
              }
            await _0x5049fe.sendMessage(_0x4a17a3, _0x456cc9, {
              quoted: _0x171143,
            })
            const _0x175d46 = await axios.get(_0x1d0aed.episodeLink),
              _0x1559da = cheerio.load(_0x175d46.data),
              _0x32f8e7 = _0x1559da('div#player-holder iframe').attr('src')
            if (_0x32f8e7) {
              const _0x1a4a74 =
                'https://api.fgmods.xyz/api/downloader/gdrive?url=' +
                _0x32f8e7 +
                '&apikey=mnp3grlZ'
              try {
                const _0xc4e6f4 = await axios.get(_0x1a4a74),
                  _0x46edb0 = _0xc4e6f4.data.result.downloadUrl
                _0x46edb0
                  ? await _0x5049fe.sendMessage(
                      _0x4a17a3,
                      {
                        document: { url: _0x46edb0 },
                        mimetype: 'video/mp4',
                        fileName: 'MR Malvin | ' + _0x1d0aed.title + '.mp4',
                        caption:
                          _0x1d0aed.title + ' |  *ᴍᴀʟᴠɪɴ xᴅ*\n\n> ᴍᴀʟᴠɪɴ xᴅ ᴠ3',
                      },
                      { quoted: _0x171143 }
                    )
                  : await _0xc4807(
                      'Failed to retrieve the download link for this episode.'
                    )
              } catch (_0x587198) {
                console.error('Error fetching the download link:', _0x587198)
                await _0xc4807(
                  'An error occurred while trying to fetch the download link.'
                )
              }
            } else {
              await _0xc4807('No downloadable link found for this episode.')
            }
          } else {
            await _0xc4807('Please reply with a valid number from the list.')
          }
        }
      })
    } catch (_0x546741) {
      _0xc4807('*Error occurred while scraping!*')
      console.error(_0x546741)
    }
  }
)

const { sinhalaSub } = require('mrnima-moviedl')
cmd(
  {
    pattern: 'sinhalasub',
    alias: ['movie'],
    react: '\uD83D\uDCD1',
    category: 'movie',
    desc: 'Search movies on sinhalasub and get download links',
    filename: __filename,
  },
  async (
    _0x3dfd8e,
    _0x4ceff8,
    _0xe26d99,
    { from: _0x4a183a, q: _0x2f9e41, reply: _0x20f27b }
  ) => {
    try {
      if (!_0x2f9e41) {
        return await _0x20f27b(
          '*Please provide a search query! (e.g., Deadpool)*'
        )
      }
      var _0xb3afe = await sinhalaSub()
      const _0x5c943b = await _0xb3afe.search(_0x2f9e41),
        _0x66d8c6 = _0x5c943b.result.slice(0, 10)
      if (!_0x66d8c6 || _0x66d8c6.length === 0) {
        return await _0x20f27b('No results found for: ' + _0x2f9e41)
      }
      let _0x563ad3 =
        '\uD83D\uDCFD️ *Search Results for* "' + _0x2f9e41 + '":\n\n'
      _0x66d8c6.forEach((_0x5634fb, _0x85e080) => {
        _0x563ad3 +=
          '*' +
          (_0x85e080 + 1) +
          '.* ' +
          _0x5634fb.title +
          '\n\uD83D\uDD17 Link: ' +
          _0x5634fb.link +
          '\n\n'
      })
      const _0x5c02b8 = await _0x3dfd8e.sendMessage(
          _0x4a183a,
          { text: _0x563ad3 },
          { quoted: _0xe26d99 }
        ),
        _0xc5b266 = _0x5c02b8.key.id
      _0x3dfd8e.ev.on('messages.upsert', async (_0x3276da) => {
        const _0x220196 = _0x3276da.messages[0]
        if (!_0x220196.message) {
          return
        }
        const _0x3f6bef =
            _0x220196.message.conversation ||
            _0x220196.message.extendedTextMessage?.text,
          _0xfacf40 =
            _0x220196.message.extendedTextMessage &&
            _0x220196.message.extendedTextMessage.contextInfo.stanzaId ===
              _0xc5b266
        if (_0xfacf40) {
          const _0x5975fb = parseInt(_0x3f6bef.trim())
          if (
            !isNaN(_0x5975fb) &&
            _0x5975fb > 0 &&
            _0x5975fb <= _0x66d8c6.length
          ) {
            const _0x51bcf2 = _0x66d8c6[_0x5975fb - 1],
              _0x3c116b =
                'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' +
                encodeURIComponent(_0x51bcf2.link)
            try {
              const _0x306fd2 = await axios.get(_0x3c116b),
                _0x4bd79a = _0x306fd2.data.result,
                _0x446048 = _0x4bd79a.dl_links || []
              if (_0x446048.length === 0) {
                return await _0x20f27b('No PixelDrain links found.')
              }
              let _0x3dc978 = '\uD83C\uDFA5 *' + _0x4bd79a.title + '*\n\n'
              _0x3dc978 += '*Available PixelDrain Download Links:*\n'
              _0x446048.forEach((_0x359c3a, _0x5298f6) => {
                _0x3dc978 +=
                  '*' +
                  (_0x5298f6 + 1) +
                  '.* ' +
                  _0x359c3a.quality +
                  ' - ' +
                  _0x359c3a.size +
                  '\n\uD83D\uDD17 Link: ' +
                  _0x359c3a.link +
                  '\n\n'
              })
              const _0xf30520 = await _0x3dfd8e.sendMessage(
                  _0x4a183a,
                  { text: _0x3dc978 },
                  { quoted: _0x220196 }
                ),
                _0xe5d24f = _0xf30520.key.id
              _0x3dfd8e.ev.on('messages.upsert', async (_0xbe427f) => {
                const _0x5e6a04 = _0xbe427f.messages[0]
                if (!_0x5e6a04.message) {
                  return
                }
                const _0x3e46b6 =
                    _0x5e6a04.message.conversation ||
                    _0x5e6a04.message.extendedTextMessage?.text,
                  _0x14cafc =
                    _0x5e6a04.message.extendedTextMessage &&
                    _0x5e6a04.message.extendedTextMessage.contextInfo
                      .stanzaId === _0xe5d24f
                if (_0x14cafc) {
                  const _0x315031 = parseInt(_0x3e46b6.trim())
                  if (
                    !isNaN(_0x315031) &&
                    _0x315031 > 0 &&
                    _0x315031 <= _0x446048.length
                  ) {
                    const _0x2677a1 = _0x446048[_0x315031 - 1],
                      _0x58dd91 = _0x2677a1.link.split('/').pop()
                    await _0x3dfd8e.sendMessage(_0x4a183a, {
                      react: {
                        text: '\u2B07️',
                        key: _0xe26d99.key,
                      },
                    })
                    const _0x27bb65 =
                      'https://pixeldrain.com/api/file/' + _0x58dd91
                    await _0x3dfd8e.sendMessage(_0x4a183a, {
                      react: {
                        text: '\u2B06',
                        key: _0xe26d99.key,
                      },
                    })
                    await _0x3dfd8e.sendMessage(
                      _0x4a183a,
                      {
                        document: { url: _0x27bb65 },
                        mimetype: 'video/mp4',
                        fileName:
                          _0x4bd79a.title + ' - ' + _0x2677a1.quality + '.mp4',
                        caption:
                          _0x4bd79a.title +
                          '\nQuality: ' +
                          _0x2677a1.quality +
                          '\nPowered by SinhalaSub',
                        contextInfo: {
                          mentionedJid: [],
                          externalAdReply: {
                            title: _0x4bd79a.title,
                            body: 'Download powered by Malvin King',
                            mediaType: 1,
                            sourceUrl: _0x51bcf2.link,
                            thumbnailUrl: _0x4bd79a.image,
                          },
                        },
                      },
                      { quoted: _0x5e6a04 }
                    )
                    await _0x3dfd8e.sendMessage(_0x4a183a, {
                      react: {
                        text: '\u2705',
                        key: _0xe26d99.key,
                      },
                    })
                  } else {
                    await _0x20f27b(
                      'Invalid selection. Please reply with a valid number.'
                    )
                  }
                }
              })
            } catch (_0x3bf620) {
              console.error('Error fetching movie details:', _0x3bf620)
              await _0x20f27b(
                'An error occurred while fetching movie details. Please try again.'
              )
            }
          } else {
            await _0x20f27b(
              'Invalid selection. Please reply with a valid number.'
            )
          }
        }
      })
    } catch (_0x14553d) {
      console.error('Error during search:', _0x14553d)
      _0x20f27b('*An error occurred while searching!*')
    }
  }
)
