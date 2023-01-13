import Videoplayer from './video-player';
import { render } from '@testing-library/react';
import { takeTestFilm } from '../../mocks/mocks';

const testFilm = takeTestFilm();

describe('video-player tests', () => {
  it('should play immediately if render', async () => {
    window.HTMLVideoElement.prototype.play = jest.fn();
    render(<Videoplayer film={testFilm}/>);

    await new Promise((x) => setTimeout(x, 2000));

    expect(window.HTMLVideoElement.prototype.play).toBeCalled();
  });
});
