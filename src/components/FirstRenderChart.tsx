import { AXIS_MAX_SECONDS, FIRST_RENDER_SAMPLES, reductionPercent } from '../content/facts';
import { useLanguage } from '../i18n/useLanguage';

function widthPercent(seconds: number): string {
  return `${(seconds / AXIS_MAX_SECONDS) * 100}%`;
}

/**
 * The two real measurements behind the headline claim. Bars share one scale
 * (seconds). "Before" is hatched and "after" is solid, so the difference does
 * not rely on color alone.
 */
export function FirstRenderChart() {
  const { language, content } = useLanguage();
  const chart = content.hero.chart;
  const seconds = new Intl.NumberFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    maximumFractionDigits: 1,
  });

  return (
    <figure className="chart">
      <figcaption className="chart__caption">
        <span className="chart__title">{chart.title}</span>
        <span className="chart__note">{chart.note}</span>
      </figcaption>
      <ol className="chart__rows">
        {FIRST_RENDER_SAMPLES.map((sample, index) => {
          const label = chart.rows[index] ?? '';
          const before = `${seconds.format(sample.beforeSeconds)} s`;
          const after = `${seconds.format(sample.afterSeconds)} s`;
          const gain = `${reductionPercent(sample)}% ${chart.faster}`;
          return (
            <li key={label} className="chart__row">
              <p className="sr-only">{`${label}: ${chart.before} ${before}, ${chart.after} ${after}, ${gain}`}</p>
              <div className="chart__row-head" aria-hidden="true">
                <span>{label}</span>
                <span className="chart__gain">{gain}</span>
              </div>
              <div className="chart__bar" aria-hidden="true">
                <span className="chart__bar-label">{chart.before}</span>
                <span className="chart__track">
                  <span
                    className="chart__fill chart__fill--before"
                    style={{ width: widthPercent(sample.beforeSeconds) }}
                  />
                </span>
                <span className="chart__value">{before}</span>
              </div>
              <div className="chart__bar" aria-hidden="true">
                <span className="chart__bar-label">{chart.after}</span>
                <span className="chart__track">
                  <span
                    className="chart__fill chart__fill--after"
                    style={{ width: widthPercent(sample.afterSeconds), animationDelay: '0.35s' }}
                  />
                </span>
                <span className="chart__value">{after}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
